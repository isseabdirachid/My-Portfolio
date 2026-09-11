import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BookOpen } from "lucide-react";
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

            <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-primary-custom lg:mx-0 " />

            <p className="mt-5 w-full max-w-2xl px-0 text-left text-md leading-7 text-secondary-custom/70 md:mx-auto md:ml-0 md:max-w-none md:text-base sm:px-6 sm:text-lg lg:mx-0 lg:max-w-2xl lg:px-0">
                {t("about.description")}
            </p>

            <Button
                type="button"
                onClick={() => setCvOpen(true)}
                className="mt-8 h-10 gap-2 bg-primary-custom text-sm text-white hover:bg-primary-custom/90"
            >
                {t("about.resume")}
                <BookOpen className="size-4" />
            </Button>

            <CVDialog
                open={cvOpen}
                onOpenChange={setCvOpen}
            />
        </div>
    );
}

export default AboutContent;
