import {  Briefcase,  Handshake} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

function HeroActions() {
    const { t } = useTranslation();

    return (
        <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
                asChild
                className="p-4 gap-2 bg-primary-custom text-white hover:bg-primary-custom/90"
            >
                <Link to="/contact">
                    {t("hero.connect")}
                    <Handshake className="size-4" />
                </Link>
            </Button>

            <Button
                asChild
                variant="outline"
                className="border-secondary-custom/20 text-secondary-custom hover:bg-secondary-custom/5"
            >
                <Link to="/portfolio">
                    {t("hero.viewWork")}
                    <Briefcase className="w-6 h-6 text-primary-custom" />
                </Link>
            </Button>
        </div>
    );
}

export default HeroActions;
