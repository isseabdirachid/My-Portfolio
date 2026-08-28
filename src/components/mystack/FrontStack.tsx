import { FaReact } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

const FrontStack = () => {
    return (
        <div className="w-full py-2">
            <div className="flex w-full flex-col items-center md:flex-row md:justify-center">

                {/* Frontend */}
                <div className="flex h-8 items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 shadow-sm">
                    <span className="size-2.5 rounded-full bg-emerald-500" />

                    <span className="text-sm font-bold uppercase tracking-wider text-emerald-500">
                        Frontend
                    </span>
                </div>

                {/* Mobile Connector */}
                <div className="h-5 w-px bg-emerald-500/30 md:hidden" />

                {/* Desktop/Tablet Connector */}
                <div className="hidden h-px w-6 bg-slate-300 dark:bg-slate-700 sm:w-8 md:block md:w-10" />

                {/* Stack */}
                <div className="flex flex-col items-center md:flex-row">

                    {/* React - Master */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-sm">
                        <FaReact className="size-6 text-cyan-500" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-emerald-500/30 md:h-px md:w-6 lg:w-8" />

                    {/* Next.js - Master */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-sm">
                        <SiNextdotjs className="size-6 text-slate-900 dark:text-white" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-emerald-500/30 md:h-px md:w-6 lg:w-8" />

                    {/* TypeScript - Master */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-sm">
                        <SiTypescript className="size-6 text-blue-600" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-emerald-500/30 md:h-px md:w-6 lg:w-8" />

                    {/* Tailwind CSS - Master */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-sm">
                        <SiTailwindcss className="size-6 text-cyan-500" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FrontStack;
