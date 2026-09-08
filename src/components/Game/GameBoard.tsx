import { useState } from "react";
import { useTranslation } from "react-i18next";
import ShinyText from "@/components/animations/ShinyText";
import { Button } from "@/components/ui/button";
import SpecularButton from "@/components/shared/SpecularButton";
import { Input } from "@/components/ui/input";
interface GameBoardProps {
    attempts: number;
    gameWon: boolean;
    onGuess: (guess: number) => void;
}

function GameBoard({
                       attempts,
                       gameWon,
                       onGuess,
                   }: GameBoardProps) {
    const { t } = useTranslation();
    const [guess, setGuess] = useState("");

    const handleSubmit = () => {
        const number = Number(guess);

        if (number < 1 || number > 100) return;
        if (attempts >= 8 || gameWon) return;

        onGuess(number);
        setGuess("");
    };

    return (
        <div className="mx-auto max-w-2xl">
            <h3 className="font-poppins text-center text-2xl font-bold text-secondary-custom sm:text-3xl">
                <ShinyText
                    text={t("game.guessTitle")}
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
            </h3>

            <p className="mt-3 text-center text-base text-secondary-custom/60 sm:text-lg">
                {t("game.guessDescription")}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <Input
                    type="number"
                    min="1"
                    max="100"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        }
                    }}
                    disabled={attempts >= 8 || gameWon}
                    placeholder={t("game.placeholder")}
                    className="h-14 w-full appearance-none rounded-xl text-center text-base [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />

                {/* Dark Mode */}
                <div className="hidden dark:block">
                    <SpecularButton
                        type="button"
                        size="md"
                        radius={18}
                        tint="#FB8500"
                        tintOpacity={0}
                        blur={0}
                        textColor="#f5f5f5"
                        lineColor="#ffffff"
                        baseColor="#FB8500"
                        intensity={1}
                        shineSize={12}
                        shineFade={26}
                        thickness={1}
                        speed={0.3}
                        followMouse
                        proximity={190}
                        autoAnimate={false}
                        onClick={handleSubmit}
                        disabled={attempts >= 8 || gameWon}
                    >
                        {t("game.guess")}
                    </SpecularButton>
                </div>

                {/* Light Mode */}
                <div className="block dark:hidden">
                    <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={attempts >= 8 || gameWon}
                        className="h-14 rounded-xl bg-primary-custom px-8 text-white hover:bg-primary-custom/90"
                    >
                        {t("game.guess")}
                    </Button>
                </div>
            </div>

            <div className="mt-6 text-center text-sm font-medium text-secondary-custom/70">
                {t("game.attempts")}: {attempts}/8
            </div>
        </div>
    );
}

export default GameBoard;
