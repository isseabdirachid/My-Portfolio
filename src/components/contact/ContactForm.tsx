import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const ContactForm: React.FC = () => {
    const { t } = useTranslation();

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
    };

    return (
        <form
            className="contact-form__form"
            onSubmit={handleSubmit}
        >
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

            <button
                type="submit"
                className="contact-form__submit"
            >
                <span>{t("contact.send")}</span>

                <span className="contact-form__submit-icon">
                    <ArrowUpRight size={18} />
                </span>
            </button>
        </form>
    );
};

export default ContactForm;
