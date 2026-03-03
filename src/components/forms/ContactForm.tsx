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
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const [state, formAction, isPending] = useActionState(submitContactForm, initialFormState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  useEffect(() => {
    if (state.status !== "error" || !state.fieldErrors) {
      return;
    }

    if (state.fieldErrors.name?.length) {
      nameInputRef.current?.focus();
      return;
    }

    if (state.fieldErrors.email?.length) {
      emailInputRef.current?.focus();
      return;
    }

    if (state.fieldErrors.message?.length) {
      messageInputRef.current?.focus();
    }
  }, [state.fieldErrors, state.status]);

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
          ref={nameInputRef}
          name="name"
          type="text"
          className={styles.input}
          placeholder="Your Name…"
          autoComplete="name"
          required
          minLength={2}
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
          ref={emailInputRef}
          name="email"
          type="email"
          className={styles.input}
          placeholder="Your Email…"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          required
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
          ref={messageInputRef}
          name="message"
          className={styles.textarea}
          placeholder="Tell me about your project…"
          rows={5}
          autoComplete="off"
          required
          minLength={20}
          aria-invalid={Boolean(messageErrors)}
          aria-describedby={messageErrors ? "message-error" : undefined}
        />
        {messageErrors ? (
          <p id="message-error" className={styles.errorText}>
            {messageErrors[0]}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className={`buttonBase buttonBlue ${styles.sendButton}`}
        disabled={isPending}
        aria-busy={isPending}
      >
        {isPending ? "Sending…" : "Send Message"}
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
