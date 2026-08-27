import {
    FaJava,
    FaPython,
    FaLaravel,
    FaNodeJs,
} from "react-icons/fa";

const BackStack = () => {
    return (
        <div className="w-full py-2">
            <div className="flex w-full flex-col items-center md:flex-row md:justify-center">

                {/* Backend Stack */}
                <div className="order-1 flex flex-col items-center md:order-1 md:flex-row">

                    {/* Java */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaJava className="size-6 text-[#ED8B00]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Java → Python */}
                    <div className="h-5 w-px bg-primary-custom/30 md:h-px md:w-6 lg:w-8" />

                    {/* Python */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaPython className="size-6 text-[#3776AB]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Python → Laravel */}
                    <div className="h-5 w-px bg-primary-custom/30 md:h-px md:w-6 lg:w-8" />

                    {/* Laravel */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaLaravel className="size-6 text-[#FF2D20]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Laravel → Node.js */}
                    <div className="h-5 w-px bg-primary-custom/30 md:h-px md:w-6 lg:w-8" />

                    {/* Node.js */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaNodeJs className="size-6 text-[#339933]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Desktop Connector */}
                    <div className="hidden h-px w-6 bg-primary-custom/30 sm:w-8 md:block md:w-10" />

                </div>

                {/* Mobile Connector */}
                <div className="order-2 h-5 w-px bg-primary-custom/30 md:hidden" />

                {/* Backend */}
                <div className="order-3 flex h-12 items-center gap-2 rounded-full border border-primary-custom/20 bg-primary-custom/5 px-5 shadow-sm md:order-2">
                    <span className="size-2.5 rounded-full bg-primary-custom" />

                    <span className="text-sm font-bold uppercase tracking-wider text-primary-custom">
                        Backend
                    </span>
                </div>

            </div>
        </div>
    );
};

export default BackStack;
