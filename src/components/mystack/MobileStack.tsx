import { FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const MobileStack = () => {
    return (
        <div className="w-full py-2 mb-26 sm:mb-0 ">
            <div className="flex w-full flex-col items-center md:flex-row md:justify-center">

                {/* Mobile */}
                <div className="order-1 flex h-8 items-center gap-2 rounded-full border border-primary-custom/20 bg-primary-custom/5 px-4 shadow-sm md:order-2">
                    <span className="size-2.5 rounded-full bg-primary-custom" />

                    <span className="text-sm font-bold uppercase tracking-wider text-primary-custom">
                        Mobile
                    </span>
                </div>

                {/* Mobile Connector */}
                <div className="order-2 h-5 w-px bg-primary-custom/30 md:hidden" />

                {/* Mobile Stack */}
                <div className="order-3 flex flex-col items-center md:order-1 md:flex-row">

                    {/* React Native */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <FaReact className="size-6 text-[#61DAFB]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* React Native → Flutter */}
                    <div className="h-5 w-px bg-primary-custom/30 md:h-px md:w-6 lg:w-8" />

                    {/* Flutter */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <SiFlutter className="size-6 text-[#02569B]" />

                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Desktop Connector */}
                    <div className="hidden h-px w-6 bg-primary-custom/30 sm:w-8 md:block md:w-10" />

                </div>

            </div>
        </div>
    );
};

export default MobileStack;
