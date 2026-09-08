import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function ModeToggle() {
    const [darkMode, setDarkMode] = useState(() =>
        document.documentElement.classList.contains("dark"),
    );

    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle("dark");

        setDarkMode(isDark);
    };

    return (
        <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="flex size-9 items-center justify-center rounded-lg border border-black/10 text-secondary-custom transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
        >
            {darkMode ? (
                <Sun className="size-4" />
            ) : (
                <Moon className="size-4" />
            )}
        </button>
    );
}

export default ModeToggle;
