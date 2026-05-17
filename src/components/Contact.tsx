'use client';

import {useRef, useState} from 'react';
import {ContactFormData, FormStatus} from '@/types';

import CalendlyCTA from './CalendlyCTA';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import SectionWrapper from './SectionWrapper';

const projectTypes = [
  'Freelance project',
  'Full-time role',
  'Consulting / audit',
  'Other',
];

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  projectType: projectTypes[0],
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);

  const [status, setStatus] = useState<FormStatus>({
    state: 'idle',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // Individual refs for better accessibility + UX
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  // ─────────────────────────────────────────────
  // Validation
  // ─────────────────────────────────────────────
  function validate(data: ContactFormData): Partial<ContactFormData> {
    const errs: Partial<ContactFormData> = {};

    if (!data.name.trim()) {
      errs.name = 'Name is required.';
    }

    if (!data.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Enter a valid email address.';
    }

    const cleanedMessage = data.message.replace(/\s+/g, ' ').trim();

    if (!cleanedMessage) {
      errs.message = 'Message is required.';
    } else if (cleanedMessage.length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }

    return errs;
  }

  // ─────────────────────────────────────────────
  // Input Change
  // ─────────────────────────────────────────────
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  }

  // ─────────────────────────────────────────────
  // Submit Handler
  // ─────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Prevent double submit
    if (status.state === 'loading') return;

    // Validate form
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Focus first invalid field
      if (validationErrors.name) {
        nameRef.current?.focus();
      } else if (validationErrors.email) {
        emailRef.current?.focus();
      } else if (validationErrors.message) {
        messageRef.current?.focus();
      }

      return;
    }

    setStatus({
      state: 'loading',
      message: '',
    });

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL;

      if (!endpoint) {
        throw new Error('Form endpoint is not configured.');
      }

      // Abort request if too slow
      const controller = new AbortController();

      const timeout = setTimeout(() => {
        controller.abort();
      }, 10000);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      let data: any = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok || data?.errors) {
        const serverMessage =
          data?.errors?.[0]?.message ?? 'Failed to send message.';

        throw new Error(serverMessage);
      }

      setStatus({
        state: 'success',
        message: "Thanks! I'll get back to you within 1–2 days.",
      });

      setFormData(emptyForm);
      setErrors({});
    } catch (err: unknown) {
      let message = 'Something went wrong. Please try again later.';

      if (err instanceof DOMException && err.name === 'AbortError') {
        message = 'Request timed out. Please try again.';
      } else if (err instanceof Error) {
        message = err.message;
      }

      setStatus({
        state: 'error',
        message,
      });
    }
  }

  const isLoading = status.state === 'loading';

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-gray-950">
      {/* Header */}
      <FadeIn direction="up">
        <SectionHeader
          title="Start a Project"
          subtitle="Tell me about your goals — I reply within 24 hours on business days"
        />
      </FadeIn>

      {status.state === 'success' ? (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl dark:bg-green-900">
            ✓
          </div>

          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            Message sent!
          </p>

          <p className="text-gray-500 dark:text-gray-400">{status.message}</p>

          <button
            onClick={() =>
              setStatus({
                state: 'idle',
                message: '',
              })
            }
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <FadeIn direction="up" delay={0.15}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-8 lg:col-span-3 dark:border-gray-700 dark:bg-gray-800"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>

              <input
                ref={nameRef}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="Jane Smith"
                className={`rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors dark:bg-gray-900 dark:text-white
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950
                  ${
                    errors.name
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
              />

              {errors.name && (
                <p id="name-error" className="mt-0.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>

              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="jane@example.com"
                className={`rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors dark:bg-gray-900 dark:text-white
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950
                  ${
                    errors.email
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
              />

              {errors.email && (
                <p id="email-error" className="mt-0.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="projectType"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Project type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                disabled={isLoading}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-950"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>

              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="Hi, I'd love to talk about..."
                className={`resize-none rounded-xl border bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors dark:bg-gray-900 dark:text-white
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950
                  ${
                    errors.message
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
              />

              <div className="flex items-start justify-between">
                {errors.message ? (
                  <p id="message-error" className="text-xs text-red-500">
                    {errors.message}
                  </p>
                ) : (
                  <span />
                )}

                <span className="ml-auto text-xs text-gray-400">
                  {formData.message.length}/1000
                </span>
              </div>
            </div>

            {/* Error Banner */}
            {status.state === 'error' && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
                {status.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:bg-blue-400"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                'Send Message →'
              )}
            </button>

            {/* Honeypot Anti-Spam */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
          </form>
          <div className="lg:col-span-2">
            <CalendlyCTA variant="card" className="h-full" />
          </div>
          </div>
        </FadeIn>
      )}
    </SectionWrapper>
  );
}
