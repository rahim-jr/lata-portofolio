export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[]>;
}
