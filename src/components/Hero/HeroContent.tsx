import { useTranslation } from "react-i18next";

import "@/styles/hero.css";

function HeroContent() {
    const { t } = useTranslation();

    return (
        <div className="max-w-2xl">
            <p className="mb-4 text-sm font-poppins font-medium tracking-[0.25em]">
                👋 {t("hero.greeting")}
            </p>

            <h2 className="font-poppins mt-3 text-xl font-semibold text-primary-custom sm:text-2xl">
                {t("hero.name")}
            </h2>

            <h1 className="hero-title-right mt-3 text-center text-4xl font-bold leading-tight tracking-tight text-secondary-custom sm:text-5xl md:text-left lg:text-6xl">
                {t("hero.profession")}
            </h1>

            <h1 className="hero-title-left mt-3 ml-0 text-center text-4xl font-bold leading-tight tracking-tight text-primary-custom sm:ml-20 sm:text-5xl md:text-left lg:ml-62 lg:text-6xl">
                {t("hero.position")}
            </h1>
            <p className="mt-4 max-w-xl text-left text-base leading-7 text-secondary-custom/70 sm:text-1xl lg:text-justify">
                {t("hero.description")}
            </p>
        </div>
    );
}

export default HeroContent;
