"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ContactFormData, ContactFormErrors } from "@/types";

interface ContactFormProps {
    productName: string;
}

function validate(data: ContactFormData): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!data.name.trim()) {
        errors.name = "Name is required.";
    } else if (data.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }

    if (!data.company.trim()) {
        errors.company = "Company is required.";
    }

    if (!data.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!data.useCase.trim()) {
        errors.useCase = "Use case is required.";
    } else if (data.useCase.trim().length < 20) {
        errors.useCase = "Please provide at least 20 characters about your use case.";
    }

    return errors;
}

export default function ContactForm({ productName }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        company: "",
        email: "",
        useCase: "",
    });
    const [errors, setErrors] = useState<ContactFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear the error for this field when user starts typing
        if (errors[name as keyof ContactFormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError(false);

        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed");

            setIsSuccess(true);
        } catch {
            setSubmitError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="rounded-[var(--radius-lg)] border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                    Request Submitted
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                    Thank you for your interest in {productName}. We&apos;ll be in touch within 48 hours.
                </p>
            </div>
        );
    }

    const inputClasses = (field: keyof ContactFormErrors) =>
        cn(
            "w-full rounded-[var(--radius-md)] border bg-[var(--color-bg-tertiary)] px-4 py-3",
            "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]",
            "transition-colors duration-200 outline-none",
            "focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]",
            errors[field]
                ? "border-[var(--color-error)]"
                : "border-[var(--color-border)]"
        );

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Name
                </label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses("name")}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "error-name" : undefined}
                />
                {errors.name && (
                    <p id="error-name" className="mt-1.5 text-sm text-[var(--color-error)]" role="alert" aria-live="polite">
                        {errors.name}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Company
                </label>
                <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses("company")}
                    placeholder="Company name"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "error-company" : undefined}
                />
                {errors.company && (
                    <p id="error-company" className="mt-1.5 text-sm text-[var(--color-error)]" role="alert" aria-live="polite">
                        {errors.company}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Email
                </label>
                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses("email")}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "error-email" : undefined}
                />
                {errors.email && (
                    <p id="error-email" className="mt-1.5 text-sm text-[var(--color-error)]" role="alert" aria-live="polite">
                        {errors.email}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="contact-usecase" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Use Case
                </label>
                <textarea
                    id="contact-usecase"
                    name="useCase"
                    rows={4}
                    value={formData.useCase}
                    onChange={handleChange}
                    className={cn(inputClasses("useCase"), "resize-y min-h-[100px]")}
                    placeholder="Describe your use case and what you're looking to achieve..."
                    aria-invalid={!!errors.useCase}
                    aria-describedby={errors.useCase ? "error-usecase" : undefined}
                />
                {errors.useCase && (
                    <p id="error-usecase" className="mt-1.5 text-sm text-[var(--color-error)]" role="alert" aria-live="polite">
                        {errors.useCase}
                    </p>
                )}
            </div>

            {submitError && (
                <div className="rounded-[var(--radius-md)] border border-[var(--color-error)] bg-red-500/5 p-3 text-sm text-[var(--color-error)]" role="alert">
                    Something went wrong. Please try again.
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                aria-label={`Request access to ${productName}`}
                className={cn(
                    "w-full rounded-[var(--radius-sm)] py-3 px-6 text-base font-medium transition-all duration-200 cursor-pointer",
                    "bg-[var(--color-btn-primary-bg)] text-[var(--color-btn-primary-text)]",
                    "hover:bg-[var(--color-btn-primary-hover)]",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
            >
                {isSubmitting ? "Submitting…" : "Request Access"}
            </button>
        </form>
    );
}
