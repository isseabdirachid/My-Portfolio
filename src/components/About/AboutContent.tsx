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
        <div className="w-full max-w-2xl text-center lg:text-left">
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

            <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-primary-custom lg:mx-0 md:ml-70" />

            <p className="mt-5 w-full max-w-2xl px-0 text-left text-md leading-7 text-secondary-custom/70 md:mx-auto md:ml-25 md:text:2xl sm:px-6 sm:text-lg lg:mx-0 lg:px-0">
                {t("about.description")}
            </p>



            <Button
                type="button"
                onClick={() => setCvOpen(true)}
                className="mt-8 h-10 gap-2 bg-primary-custom text-sm  text-white hover:bg-primary-custom/90"
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
