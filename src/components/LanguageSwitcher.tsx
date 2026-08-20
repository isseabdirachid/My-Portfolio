import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const languages = [
    {
        code: "en",
        name: "English",
        flag: "gb",
    },
    {
        code: "de",
        name: "Deutsch",
        flag: "de",
    },
] as const;

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentLanguage =
        languages.find(
            (language) => language.code === i18n.language,
        ) ?? languages[0];

    const changeLanguage = (language: "en" | "de") => {
        i18n.changeLanguage(language);
        setOpen(false);
    };

    return (
        <div className="relative">
            <Button
                type="button"
                variant="ghost"
                onClick={() => setOpen((value) => !value)}
                className="h-10 gap-1.5 rounded-xl px-2.5 text-secondary-custom hover:bg-secondary-custom/5"
                aria-label="Change language"
            >
                <span
                    className={`fi fi-${currentLanguage.flag}`}
                    aria-hidden="true"
                />

                <ChevronDown
                    className={`size-3.5 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </Button>

            {open && (
                <>
                    <button
                        type="button"
                        aria-label="Close language menu"
                        className="fixed inset-0 z-40 cursor-default"
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute left-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-secondary-custom/10 bg-background-dark p-1.5 shadow-xl">
                        {languages.map((language) => {
                            const isActive =
                                language.code === currentLanguage.code;

                            return (
                                <button
                                    key={language.code}
                                    type="button"
                                    onClick={() =>
                                        changeLanguage(language.code)
                                    }
                                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                        isActive
                                            ? "bg-primary-custom/10"
                                            : "hover:bg-secondary-custom/5"
                                    }`}
                                >
                                    <span
                                        className={`fi fi-${language.flag}`}
                                        aria-hidden="true"
                                    />

                                    <span className="flex-1 text-left text-secondary-custom">
                                        {language.name}
                                    </span>

                                    {isActive && (
                                        <Check className="size-4 text-primary-custom" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default LanguageSwitcher;
