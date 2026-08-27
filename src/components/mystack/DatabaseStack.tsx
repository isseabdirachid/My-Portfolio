import {
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
} from "react-icons/si";

const DatabaseStack = () => {
    return (
        <div className="w-full py-2">
            <div className="flex w-full flex-col items-center md:flex-row md:justify-center">

                {/* Database */}
                <div className="flex h-12 items-center gap-2 rounded-full border border-primary-custom/20 bg-primary-custom/5 px-5 shadow-sm">
                    <span className="size-2.5 rounded-full bg-primary-custom" />

                    <span className="text-sm font-bold uppercase tracking-wider text-primary-custom">
                        Database
                    </span>
                </div>

                {/* Mobile Connector */}
                <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 md:hidden" />

                {/* Desktop Connector */}
                <div className="hidden h-px w-6 bg-slate-300 dark:bg-slate-700 sm:w-8 md:block md:w-10" />

                {/* Database Stack */}
                <div className="flex flex-col items-center md:flex-row">

                    {/* PostgreSQL */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <SiPostgresql className="size-6 text-[#336791]" />

                        {/* Orange Status Dot */}
                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 md:h-px md:w-6 lg:w-8" />

                    {/* MySQL */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <SiMysql className="size-6 text-[#4479A1]" />

                        {/* Orange Status Dot */}
                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 md:h-px md:w-6 lg:w-8" />

                    {/* MongoDB */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <SiMongodb className="size-6 text-[#47A248]" />

                        {/* Orange Status Dot */}
                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                    {/* Connector */}
                    <div className="h-5 w-px bg-slate-300 dark:bg-slate-700 md:h-px md:w-6 lg:w-8" />

                    {/* Redis */}
                    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-custom/20 bg-primary-custom/5 shadow-sm">
                        <SiRedis className="size-6 text-[#DC382D]" />

                        {/* Orange Status Dot */}
                        <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-primary-custom dark:border-slate-900" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DatabaseStack;
