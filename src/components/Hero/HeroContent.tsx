import { useTranslation } from "react-i18next";

import "@/styles/hero.css";

function HeroContent() {
    const { t } = useTranslation();

    return (
        <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-primary-custom">
                👋 {t("hero.greeting")}
            </p>

            <h2 className="font-poppins mt-3 text-ml font-semibold text-primary-custom sm:text-2xl">
                {t("hero.name")}
            </h2>


            <h1 className="hero-title-right mt-3 text-6xl font-bold leading-tight tracking-tight text-secondary-custom sm:text-6xl lg:text-4xl">
                {t("hero.profession")}
            </h1>


            <h1 className="hero-title-left mt-3 ml-62 text-6xl font-bold leading-tight tracking-tight text-primary-custom sm:text-6xl lg:text-4xl">
                {t("hero.position")}
            </h1>

            <p className="mt-4 max-w-xl text-justify text-base leading-7 text-secondary-custom/70 sm:text-lg">
                {t("hero.description")}
            </p>
        </div>
    );
}

export default HeroContent;
