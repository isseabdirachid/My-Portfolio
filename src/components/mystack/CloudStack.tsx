import { SiGit, SiDocker } from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa";

const DevOpsStack = () => {
    return (
        <div className="w-full py-2 mt-8 md:mt-0">
            <div className="flex w-full flex-col items-center md:flex-row md:justify-center">

                {/* DevOps */}
                <div className="flex h-12 items-center gap-2 rounded-full border border-primary-custom/20 bg-primary-custom/5 px-5 shadow-sm">
                    <span className="size-2.5 rounded-full bg-primary-custom" />

                    <span className="text-sm font-bold uppercase tracking-wider text-primary-custom">
                        DevOps
                    </span>
                </div>

                {/* Mobile Connector */}
                <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 md:hidden" />

                {/* Desktop Connector */}
                <div className="hidden h-px w-6 bg-slate-300 dark:bg-slate-700 sm:w-8 md:block md:w-10" />

                {/* DevOps Stack */}
                <div className="flex flex-col items-center md:flex-row">

                    {/* Git - Master */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-sm">
                        <SiGit className="size-6 text-[#F05032]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-emerald-500/30 md:h-px md:w-6 lg:w-8" />

                    {/* Docker - Master */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-sm">
                        <SiDocker className="size-6 text-[#2496ED]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-emerald-500/30 md:h-px md:w-6 lg:w-8" />

                    {/* AWS */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaAws className="size-6 text-[#FF9900]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 md:h-px md:w-6 lg:w-8" />

                    {/* Azure */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaMicrosoft className="size-6 text-[#0078D4]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DevOpsStack;
