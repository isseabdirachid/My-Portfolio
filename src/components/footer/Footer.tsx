import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "@/assets/images/logo.png";
import ModeToggle from "@/components/shared/ModeToggle.tsx";

const navItems = [
    { key: "home", to: "/" },
    { key: "about", to: "/About" },
    { key: "portfolio", to: "/portfolio" },
    { key: "blog", to: "/blog" },
    { key: "contact", to: "/contact" },
] as const;

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/isseabdirachid",
        icon: FaGithub,
        external: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/isse-abdirachid-5019a4343/",
        icon: FaLinkedin,
        external: true,
    },
    {
        name: "Email",
        href: "mailto:your@email.com",
        icon: Mail,
        external: false,
    },
];

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="relative isolate w-full min-w-0 max-w-[100vw] overflow-x-clip overflow-y-hidden border-t border-slate-200/70 bg-slate-100 text-slate-900 dark:border-white/10 dark:bg-slate-950/80 dark:text-white dark:backdrop-blur-sm">

            {/* Subtle orange glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-custom/5 blur-3xl dark:bg-primary-custom/10"
            />

            <div className="relative mx-auto w-full min-w-0 max-w-5xl px-5 sm:px-8">

                {/* LOGO */}
                <div className="flex justify-center py-8">
                    <NavLink
                        to="/"
                        aria-label="Go to homepage"
                        className="block shrink-0 transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={logo}
                            alt="Isse Abdirachid logo"
                            className="h-28 w-auto max-w-[80vw] object-contain sm:h-32"
                        />
                    </NavLink>
                </div>

                {/* NAVIGATION */}
                <nav
                    aria-label="Footer navigation"
                    className="flex w-full min-w-0 justify-center"
                >
                    <div className="flex w-full max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-5">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `group relative px-2 py-2 text-sm font-medium transition-colors duration-300 ${
                                        isActive
                                            ? "text-primary-custom"
                                            : "text-slate-600 hover:text-primary-custom dark:text-slate-400 dark:hover:text-primary-custom"
                                    } after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-primary-custom after:transition-all after:duration-300 ${
                                        isActive
                                            ? "after:w-3/4"
                                            : "after:w-0 group-hover:after:w-3/4"
                                    }`
                                }
                            >
                                {t(`navbar.${item.key}`)}
                            </NavLink>
                        ))}
                    </div>
                </nav>

                {/* SOCIALS + MODE TOGGLE */}
                <div className="mt-7 flex items-center justify-center gap-3">
                    {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.external ? "_blank" : undefined}
                                rel={social.external ? "noreferrer" : undefined}
                                aria-label={social.name}
                                className="group flex size-10 shrink-0 items-center justify-center rounded-full border border-primary-custom/50 text-primary-custom transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:border-primary-custom/30 hover:bg-primary-custom/30 hover:text-primary-custom hover:shadow-[0_8px_20px_rgba(249,115,22,0.18)] active:scale-95"
                            >
                                <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                            </a>
                        );
                    })}

                    <ModeToggle />
                </div>

                {/* DIVIDER */}
                <div className="mx-auto mt-8 h-px w-full bg-slate-300/70 dark:bg-white/10" />

                {/* COPYRIGHT */}
                <div className="py-6 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                        © 2026 Isse Abdirachid · All Rights Reserved

                    </p>
                </div>
            </div>

            {/* BIG NAME */}
            <div
                aria-hidden="true"
                className="w-full min-w-0 max-w-full overflow-hidden px-0"
            >
                <h2 className="m-0 w-full max-w-full text-center text-[clamp(2.7rem,13vw,14rem)] font-black leading-[0.75] tracking-[-0.065em] text-primary-custom select-none mb-2  mt-24">
                    Isse Abdirachid
                </h2>
            </div>
        </footer>
    );
}

export default Footer;
