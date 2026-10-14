import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const FORMSPREE_ENDPOINT =
    "https://formspree.io/f/mrpeyddn"

const ContactForm: React.FC = () => {
    const { t } = useTranslation();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"success" | "error" | "">("");

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const form = event.currentTarget;

        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Message could not be sent");
            }

            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            className="contact-form__form"
            onSubmit={handleSubmit}
        >
            {/* Name */}
            <div className="contact-form__field">
                <label htmlFor="contact-name">
                    {t("contact.name")}
                </label>

                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder={t("contact.namePlaceholder")}
                    autoComplete="name"
                    required
                />
            </div>

            {/* Email */}
            <div className="contact-form__field">
                <label htmlFor="contact-email">
                    {t("contact.email")}
                </label>

                <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={t("contact.emailPlaceholder")}
                    autoComplete="email"
                    required
                />
            </div>

            {/* Message */}
            <div className="contact-form__field">
                <label htmlFor="contact-message">
                    {t("contact.message")}
                </label>

                <textarea
                    id="contact-message"
                    name="message"
                    placeholder={t("contact.messagePlaceholder")}
                    rows={7}
                    required
                />
            </div>

            {/* Honeypot: additional spam protection */}
            <div
                className="contact-form__honeypot"
                aria-hidden="true"
            >
                <label htmlFor="contact-website">
                    Leave this field empty
                </label>

                <input
                    id="contact-website"
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                className="contact-form__submit"
                disabled={isSubmitting}
            >
                <span>
                    {isSubmitting
                        ? "Sending..."
                        : t("contact.send")}
                </span>

                <span className="contact-form__submit-icon">
                    <ArrowUpRight size={18} />
                </span>
            </button>

            {/* Success message */}
            {status === "success" && (
                <p role="status">
                    Message sent successfully!
                </p>
            )}

            {/* Error message */}
            {status === "error" && (
                <p role="alert">
                    Message could not be sent. Please try again.
                </p>
            )}
        </form>
    );
};

export default ContactForm;
