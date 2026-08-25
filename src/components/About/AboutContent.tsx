import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import CVDialog from "@/components/CVDialog";

function AboutContent() {
    const [cvOpen, setCvOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-2xl text-center lg:text-left">
            <h2 className="font-poppins text-4xl font-bold text-secondary-custom sm:text-5xl">
                {t("about.title")}
            </h2>

            <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-primary-custom lg:mx-0" />

            <p className="mx-auto mt-5 w-full max-w-2xl px-4 text-base leading-7 text-secondary-custom/70 sm:px-6 sm:text-lg lg:mx-0 lg:px-0">
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
