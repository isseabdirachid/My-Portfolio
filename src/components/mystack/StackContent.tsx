import {
    ArrowUpRight,
    Sparkles,
    BookOpen
} from "lucide-react";
import ShinyText from "@/components/animations/ShinyText";
import { useTranslation } from "react-i18next";

const StackContent = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full text-center">
            {/* Title */}
            <h1 className="text-xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                <ShinyText
                    text={t("stack.title")}
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
            </h1>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-6 text-slate-500 dark:text-slate-400 sm:px-0 sm:text-base">
                {t("stack.description")}
            </p>

            {/* Stack Status */}
            <div className="mx-auto mt-7 flex w-full max-w-5xl flex-col items-center justify-center gap-2.5 sm:mt-8 sm:gap-3 md:flex-row md:gap-4">

                {/* Master Progress */}
                <div className="flex h-11 w-48 items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:h-12 sm:w-52">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 sm:size-8">
                        <Sparkles className="size-3.5 sm:size-4" />
                    </div>

                    <p className="whitespace-nowrap text-xs font-semibold text-emerald-500 sm:text-sm">
                        {t("stack.masterProgress")}
                    </p>
                </div>

                {/* Connector */}
                <div className="h-px w-10 shrink-0 bg-slate-300 dark:bg-slate-700 md:w-8" />

                {/* Learning Now */}
                <div className="flex h-11 w-48 items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:h-12 sm:w-52">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 sm:size-8">
                        <BookOpen className="size-3.5 sm:size-4" />
                    </div>

                    <p className="whitespace-nowrap text-xs font-semibold text-blue-500 sm:text-sm">
                        {t("stack.learningNow")}
                    </p>
                </div>

                {/* Connector */}
                <div className="h-px w-10 shrink-0 bg-slate-300 dark:bg-slate-700 md:w-8" />

                {/* Next Up */}
                <div className="flex h-11 w-48 items-center gap-2.5 rounded-full border border-orange-500/20 bg-orange-500/5 px-3 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 sm:h-12 sm:w-52">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-custom/10 text-primary-custom sm:size-8">
                        <ArrowUpRight className="size-3.5 sm:size-4" />
                    </div>

                    <p className="whitespace-nowrap text-xs font-semibold text-primary-custom sm:text-sm">
                        {t("stack.nextUp")}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default StackContent;
