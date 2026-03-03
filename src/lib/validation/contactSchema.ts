import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .max(120, "Email is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a bit more detail (minimum 20 characters).")
    .max(2000, "Message is too long."),
  company: z.string().trim().optional(),
});

export type ContactSchemaInput = z.infer<typeof contactSchema>;
