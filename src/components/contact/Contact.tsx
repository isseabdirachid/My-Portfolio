import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ShinyText from "@/components/animations/ShinyText";
import ContactForm from "./ContactForm";

import "./contact.css";

const Contact: React.FC = () => {
    const { t } = useTranslation();

    const socials = [
        {
            key: "github",
            href: t("contact.socials.github.href"),
            label: t("contact.socials.github.name"),
            icon: FaGithub,
            external: true,
        },
        {
            key: "linkedin",
            href: t("contact.socials.linkedin.href"),
            label: t("contact.socials.linkedin.name"),
            icon: FaLinkedin,
            external: true,
        },
        {
            key: "email",
            href: t("contact.socials.email.href"),
            label: t("contact.socials.email.name"),
            icon: Mail,
            external: false,
        },
    ];

    return (
        <section className="contact-section" id="contact">
            <div className="contact-section__container">
                {/* Animated Border Wrapper */}
                <div className="contact-section__border-wrapper">
                    <div
                        className="contact-section__animated-border"
                        aria-hidden="true"
                    />

                    <div className="contact-section__card">
                        {/* Decorative Orbs */}
                        <div
                            className="contact-section__orb contact-section__orb--one"
                            aria-hidden="true"
                        />

                        <div
                            className="contact-section__orb contact-section__orb--two"
                            aria-hidden="true"
                        />

                        {/* Left Side */}
                        <div className="contact-section__info">
                            <div className="contact-section__eyebrow">
                                <Sparkles size={15} />
                                <span>{t("contact.eyebrow")}</span>
                            </div>

                            <h2 className="contact-section__title">
                                {t("contact.contactHeadingLine1")}{" "}
                                {t("contact.contactHeadingLine2")}{" "}
                                <span className="contact-section__accent">
                                    {t("contact.contactHeadingAccent")}
                                </span>{" "}
                                {t("contact.contactHeadingLine3")}
                            </h2>

                            <p className="contact-section__info-description">
                                {t("contact.description")}
                            </p>

                            <div className="contact-section__details">
                                <a
                                    href={t("contact.emailHref")}
                                    className="contact-section__detail"
                                >
                                    <span className="contact-section__detail-icon">
                                        <Mail size={17} />
                                    </span>

                                    <span className="contact-section__detail-content">
                                        <small>
                                            {t("contact.email")}
                                        </small>

                                        <strong>
                                            {t("contact.emailValue")}
                                        </strong>
                                    </span>
                                </a>

                                <div className="contact-section__detail">
                                    <span className="contact-section__detail-icon">
                                        <Sparkles size={17} />
                                    </span>

                                    <span className="contact-section__detail-content">
                                        <small>
                                            {t("contact.availableFor")}
                                        </small>

                                        <strong>
                                            {t("contact.availability")}
                                        </strong>
                                    </span>
                                </div>

                                <div className="contact-section__detail">
                                    <span className="contact-section__detail-icon">
                                        <MapPin size={17} />
                                    </span>

                                    <span className="contact-section__detail-content">
                                        <small>
                                            {t("contact.location")}
                                        </small>

                                        <strong>
                                            {t("contact.locationValue")}
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="contact-section__socials">
                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.key}
                                            href={social.href}
                                            target={
                                                social.external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                social.external
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            aria-label={social.label}
                                            className="contact-section__social"
                                        >
                                            <Icon size={17} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="contact-section__form-area">
                            <div className="contact-section__form-glow" />

                            <div className="contact-section__form-card">
                                <div className="contact-section__form-line" />

                                <div className="contact-section__form-heading">
                                    <span>
                                        {t("contact.formLabel")}
                                    </span>

                                    <h3>
                                        <ShinyText
                                            text={t("contact.formTitle")}
                                            speed={2}
                                            delay={0}
                                            color="currentColor"
                                            shineColor="#F97316"
                                            spread={120}
                                            direction="left"
                                            yoyo={false}
                                            pauseOnHover={false}
                                            disabled={false}
                                            className="font-bold text-slate-900 dark:text-white"
                                        />
                                    </h3>
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
