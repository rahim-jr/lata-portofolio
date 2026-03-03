import { consoleContactProvider } from "./provider.console";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
  userAgent: string | null;
  ipAddress: string | null;
}

export interface ContactProvider {
  sendContactMessage(input: ContactMessage): Promise<void>;
}

let activeProvider: ContactProvider = consoleContactProvider;

export function setContactProvider(provider: ContactProvider): void {
  activeProvider = provider;
}

export async function sendContactMessage(input: ContactMessage): Promise<void> {
  await activeProvider.sendContactMessage(input);
}
