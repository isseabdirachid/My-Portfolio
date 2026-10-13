import { Briefcase, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

function HeroActions() {
    const { t } = useTranslation();

    return (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button
                asChild
                className="group gap-2 bg-primary-custom p-4 text-slate-100
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

            <Button
                asChild
                variant="outline"
                className="group gap-2 border-secondary-custom/20 text-secondary-custom
        shadow-[0_8px_20px_rgba(15,23,42,0.08)]
        transition duration-[250ms]
        hover:-translate-y-[3px] hover:bg-secondary-custom/5
        hover:shadow-[0_14px_32px_rgba(15,23,42,0.18)]
        active:-translate-y-[1px]
        focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-secondary-custom/40
        motion-reduce:transition-none"
            >
                <Link to="/portfolio">
                    {t("hero.viewWork")}

                    <span
                        className="flex items-center justify-center transition-transform duration-[250ms]
                group-hover:translate-x-[3px] group-hover:-translate-y-[3px]
                motion-reduce:transition-none"
                    >
            <Briefcase className="size-6 text-primary-custom" />
        </span>
                </Link>
            </Button>
        </div>
    );
}

export default HeroActions;
