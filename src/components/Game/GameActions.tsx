import { useTranslation } from "react-i18next";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import SpecularButton from "@/components/shared/SpecularButton";

interface GameActionsProps {
    attempts: number;
    gameWon: boolean;
    onNewGame: () => void;
}

function GameActions({
                         attempts,
                         gameWon,
                         onNewGame,
                     }: GameActionsProps) {
    const { t } = useTranslation();

    if (!gameWon && attempts < 8) {
        return null;
    }

    return (
        <div className="mt-8 flex justify-center">

            {/* Dark Mode */}
            <div className="hidden dark:block">
                <SpecularButton
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
                    onClick={onNewGame}
                >
                    {t("game.newGame")}
                </SpecularButton>
            </div>

            {/* Light Mode */}
            <div className="block dark:hidden">
                <Button
                    type="button"
                    onClick={onNewGame}
                    className="h-11 gap-2 rounded-xl bg-primary-custom px-6 text-sm text-white hover:bg-primary-custom/90"
                >
                    {t("game.newGame")}
                    <RotateCcw className="size-4" />
                </Button>
            </div>

        </div>
    );
}

export default GameActions;
