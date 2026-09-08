import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameActions from "./GameActions";
import GameResult from "./GameResult";

function Game() {
    const [targetNumber, setTargetNumber] = useState(
        () => Math.floor(Math.random() * 100) + 1
    );

    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState("");
    const [gameWon, setGameWon] = useState(false);

    const handleGuess = (guess: number) => {
        if (attempts >= 8 || gameWon) return;

        const newAttempts = attempts + 1;

        setAttempts(newAttempts);

        if (guess === targetNumber) {
            setMessage("correct");
            setGameWon(true);
        } else if (newAttempts === 8) {
            setMessage("gameOver");
        } else if (guess > targetNumber) {
            setMessage("tooHigh");
        } else {
            setMessage("tooLow");
        }
    };

    const handleNewGame = () => {
        setTargetNumber(
            Math.floor(Math.random() * 100) + 1
        );

        setAttempts(0);
        setMessage("");
        setGameWon(false);
    };

    // Confetti only when the player guesses correctly
    useEffect(() => {
        if (!gameWon) return;

        const duration = 2500;
        const end = Date.now() + duration;

        const celebrate = () => {
            // Left side
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 70,
                origin: {
                    x: 0,
                    y: 0.65,
                },
            });

            // Right side
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 70,
                origin: {
                    x: 1,
                    y: 0.65,
                },
            });

            if (Date.now() < end) {
                requestAnimationFrame(celebrate);
            }
        };

        celebrate();
    }, [gameWon]);

    return (
        <section className="w-full px-6 py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-5xl">

                <GameHeader />

                {/* Animated Card */}
                <div className="relative mt-8 overflow-hidden rounded-3xl p-[1px]">

                    {/* Animated Border - Dark Mode Only */}
                    <div
                        className="
                            absolute inset-[-100%]
                            hidden
                            bg-[conic-gradient(from_0deg,transparent_0deg,#FB8500_70deg,transparent_140deg,transparent_220deg,#8B5CF6_290deg,transparent_360deg)]
                            dark:block
                            dark:animate-[spin_6s_linear_infinite]
                        "
                    />

                    {/* Card */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[23px]
                            border
                            border-secondary-custom/10
                            bg-background-dark
                            shadow-lg
                        "
                    >
                        <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16">

                            <GameBoard
                                attempts={attempts}
                                gameWon={gameWon}
                                onGuess={handleGuess}
                            />

                            <GameResult
                                message={message}
                                targetNumber={targetNumber}
                            />

                            <GameActions
                                attempts={attempts}
                                gameWon={gameWon}
                                onNewGame={handleNewGame}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Game;
