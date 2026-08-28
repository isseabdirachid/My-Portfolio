import { useTranslation } from "react-i18next";
import ShinyText from "@/components/animations/ShinyText";
function GameHeader() {
    const { t } = useTranslation();

    return (
        <div className="text-center">
            <h2 className="font-poppins text-1xl font-semiboldbold text-secondary-custom sm:text-4xl lg:text-5xl">

                <ShinyText
                    text={t("game.title")}
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
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-base text-secondary-custom/60 sm:text-lg">
                {t("game.subtitle")}
            </p>
        </div>
    );
}

export default GameHeader;
