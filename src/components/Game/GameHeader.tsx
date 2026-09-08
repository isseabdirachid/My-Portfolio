import { useTranslation } from "react-i18next";
import ShinyText from "@/components/animations/ShinyText";
function GameHeader() {
    const { t } = useTranslation();

    return (
        <div className="text-center">
            <h2 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-secondary-custom sm:text-5xl">
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
                    className="font-semibold text-slate-900 dark:text-white"
                />
            </h2>

            <p className="mx-auto mt-3 max-w-2xl px-4 text-base leading-6 text-secondary-custom/60 sm:px-0 sm:text-lg">
                {t("game.subtitle")}
            </p>
        </div>
    );
}

export default GameHeader;
