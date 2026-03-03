"use client";

import { submitContactForm } from "@/app/actions/contact";
import type { ContactFormState } from "@/lib/types/contact";
import { useActionState, useEffect, useRef } from "react";
import styles from "./ContactForm.module.css";

const initialFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(submitContactForm, initialFormState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const nameErrors = state.fieldErrors?.name;
  const emailErrors = state.fieldErrors?.email;
  const messageErrors = state.fieldErrors?.message;

  return (
    <form ref={formRef} action={formAction} className={styles.form} noValidate>
      <div className={styles.honeypot} aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={styles.input}
          placeholder="Your Name"
          aria-invalid={Boolean(nameErrors)}
          aria-describedby={nameErrors ? "name-error" : undefined}
        />
        {nameErrors ? (
          <p id="name-error" className={styles.errorText}>
            {nameErrors[0]}
          </p>
        ) : null}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          placeholder="Your Email"
          aria-invalid={Boolean(emailErrors)}
          aria-describedby={emailErrors ? "email-error" : undefined}
        />
        {emailErrors ? (
          <p id="email-error" className={styles.errorText}>
            {emailErrors[0]}
          </p>
        ) : null}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="message" className={styles.label}>
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Tell me about your project..."
          rows={5}
          aria-invalid={Boolean(messageErrors)}
          aria-describedby={messageErrors ? "message-error" : undefined}
        />
        {messageErrors ? (
          <p id="message-error" className={styles.errorText}>
            {messageErrors[0]}
          </p>
        ) : null}
      </div>

      <button type="submit" className="buttonBase buttonBlue" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {state.message ? (
        <p
          className={`${styles.statusMessage} ${state.status === "success" ? styles.statusSuccess : styles.statusError}`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
