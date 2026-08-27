import { Download } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "@/assets/images/logo.png";

import { Button } from "@/components/ui/button";
import CVDialog from "@/components/CVDialog";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MobileNav from "@/components/MobileNav";
import ModeToggle from "@/components/ModeToggle";

const navItems = [
    { key: "home", to: "/" },
    { key: "about", to: "/About" },
    { key: "portfolio", to: "/portfolio" },
    { key: "blog", to: "/blog" },
    { key: "contact", to: "/contact" },
] as const;

function Navbar() {
    const [cvOpen, setCvOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <nav className="sticky top-0 z-50 w-full px-4 pt-4">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-secondary-custom/10 bg-background-dark/90 px-5 shadow-lg backdrop-blur-md">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="shrink-0"
                        aria-label="Go to homepage"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-primary-custom text-white"
                                            : "text-secondary-custom/70 hover:bg-secondary-custom/5 hover:text-secondary-custom"
                                    }`
                                }
                            >
                                {t(`navbar.${item.key}`)}
                            </NavLink>
                        )}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-2">

                        {/* Dark / Light Mode */}
                        <ModeToggle />

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <MobileNav
                                onDownloadCV={() => setCvOpen(true)}
                            />
                        </div>

                        {/* Language - Desktop */}
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>

                        {/* Download CV - Desktop */}
                        <Button
                            type="button"
                            onClick={() => setCvOpen(true)}
                            className="hidden gap-2 bg-primary-custom text-white hover:bg-primary-custom/90 sm:flex"
                        >
                            <Download className="size-4" />
                            {t("navbar.downloadCv")}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* CV Dialog */}
            <CVDialog
                open={cvOpen}
                onOpenChange={setCvOpen}
            />
        </>
    );
}

export default Navbar;
