import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";


const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

type MobileNavProps = {
    onDownloadCV: () => void;
};

function MobileNav({ onDownloadCV }: MobileNavProps) {
    const [open, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    const handleDownloadCV = () => {
        closeMenu();
        onDownloadCV();
    };

    return (
        <div className="relative">
            <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setOpen((value) => !value)}
                className="size-10 rounded-xl text-secondary-custom hover:bg-secondary-custom/5"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                {open ? (
                    <X className="size-5" />
                ) : (
                    <Menu className="size-5" />
                )}
            </Button>

            {open && (
                <div className="absolute right-0 top-12 z-50 w-72 rounded-2xl border border-secondary-custom/10 bg-background-dark p-3 shadow-xl">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-primary-custom text-white"
                                            : "text-secondary-custom/70 hover:bg-secondary-custom/5 hover:text-secondary-custom"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="my-3 h-px bg-secondary-custom/10" />

                    <Button
                        type="button"
                        onClick={handleDownloadCV}
                        className="w-full justify-center gap-2 bg-primary-custom text-white hover:bg-primary-custom/90"
                    >
                        <Download className="size-4" />
                        Download CV
                    </Button>

                    <div className="my-3 h-px bg-secondary-custom/10" />

                    <div className="flex items-center justify-between px-2">
                        <LanguageSwitcher />

                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNav;
