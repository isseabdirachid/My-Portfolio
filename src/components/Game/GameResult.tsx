import { useTranslation } from "react-i18next";

interface GameResultProps {
    message: string;
    targetNumber: number;
}

function GameResult({
                        message,
                        targetNumber,
                    }: GameResultProps) {
    const { t } = useTranslation();

    if (!message) return null;

    return (
        <div className="mt-6 text-center">

            {message === "gameOver" ? (
                <p className="text-base font-medium text-secondary-custom/70">
                    {t("game.gameOver", {
                        number: targetNumber,
                    })}
                </p>
            ) : (
                <p className="text-lg font-semibold text-primary-custom">
                    {t(`game.${message}`)}
                </p>
            )}

        </div>
    );
}

export default GameResult;
