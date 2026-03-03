import type { ContactMessage, ContactProvider } from "./provider";

export const consoleContactProvider: ContactProvider = {
  async sendContactMessage(input: ContactMessage) {
    console.info("[contact] message received", input);
  },
};
