import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {Handshake, } from "lucide-react";
import { Button } from "@/components/ui/button";
import CVDialog from "@/components/shared/CVDialog.tsx";
import ShinyText from "@/components/animations/ShinyText";

function AboutContent() {
    const [cvOpen, setCvOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-2xl text-center lg:text-left md:relative md:w-full md:max-w-none md:rounded-[30px] md:border md:border-orange-200/70 md:bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.055),transparent_28%),rgb(255,255,255)] md:p-8 md:shadow-[0_25px_80px_rgba(15,23,42,0.08)] dark:md:border-white/10 dark:md:bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.07),transparent_28%),rgb(15,23,42)] dark:md:shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-4xl">
                <ShinyText
                    text={t("about.title")}
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
            </h1>

            <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-primary-custom lg:mx-0" />

            <p className="mt-5 w-full max-w-2xl px-0 text-left text-md leading-7 text-secondary-custom/70 md:mx-auto md:ml-0 md:max-w-none md:text-base sm:px-6 sm:text-lg lg:mx-0 lg:max-w-2xl lg:px-0">
                {t("about.descriptionBefore")}

                <a
                    href="https://buero-digitale.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline transition-colors hover:text-primary-custom"
                >
                    {t("about.company")}
                </a>

                {t("about.descriptionAfter")}
            </p>

            <Button
                asChild
                className="group gap-2 bg-primary-custom p-4 text-slate-100 mt-5
        shadow-[0_8px_20px_rgba(250,204,21,0.25)]
        transition duration-[250ms]
        hover:-translate-y-[3px] hover:bg-primary-custom/90
        hover:shadow-[0_14px_32px_rgba(250,204,21,0.45)]
        active:-translate-y-[1px]
        focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-yellow-400
        motion-reduce:transition-none"
            >
                <Link to="/contact">
                    {t("hero.connect")}

                    <span
                        className="flex items-center justify-center transition-transform duration-[250ms]
                group-hover:translate-x-[3px] group-hover:-translate-y-[3px]
                motion-reduce:transition-none"
                    >
            <Handshake className="size-4" />
        </span>
                </Link>
            </Button>

            <CVDialog
                open={cvOpen}
                onOpenChange={setCvOpen}
            />
        </div>
    );
}

export default AboutContent;
