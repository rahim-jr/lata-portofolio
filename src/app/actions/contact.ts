"use server";

import { headers } from "next/headers";
import { sendContactMessage } from "@/lib/contact/provider";
import type { ContactFormState } from "@/lib/types/contact";
import { contactSchema } from "@/lib/validation/contactSchema";

function getFormValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

const successResponse: ContactFormState = {
  status: "success",
  message: "Thanks for reaching out. I will get back to you soon.",
};

export async function submitContactForm(_: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const payload = {
    name: getFormValue(formData, "name"),
    email: getFormValue(formData, "email"),
    message: getFormValue(formData, "message"),
    company: getFormValue(formData, "company"),
  };

  if (payload.company.length > 0) {
    return successResponse;
  }

  const parsedPayload = contactSchema.safeParse(payload);
  if (!parsedPayload.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      fieldErrors: parsedPayload.error.flatten().fieldErrors,
    };
  }

  const requestHeaders = await headers();
  await sendContactMessage({
    name: parsedPayload.data.name,
    email: parsedPayload.data.email,
    message: parsedPayload.data.message,
    submittedAt: new Date().toISOString(),
    userAgent: requestHeaders.get("user-agent"),
    ipAddress: requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
  });

  return successResponse;
}
