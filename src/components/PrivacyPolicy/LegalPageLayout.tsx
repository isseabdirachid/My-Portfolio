
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "@/components/Footer/Footer";

type LegalPageLayoutProps = {
    title: string;
    subtitle: string;
    children?: ReactNode;
};

function LegalPageLayout({
                             title,
                             subtitle,
                             children,
                         }: LegalPageLayoutProps) {
    const { t } = useTranslation();

    return (
        <main className="relative isolate min-h-screen overflow-x-clip  ">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-custom/5 blur-3xl dark:bg-primary-custom/10"
            />

            <section className="relative mx-auto w-full max-w-5xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:pb-24 lg:pt-20">
                <NavLink
                    to="/"
                    className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-custom dark:text-slate-400 dark:hover:text-primary-custom sm:mb-14"
                >
                    <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                    {t("legal.backHome")}
                </NavLink>

                <header className="mb-10 border-b border-slate-300/70 pb-8 text-center dark:border-white/10 sm:mb-14 sm:pb-10">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-custom sm:text-sm">
                        {t("legal.eyebrow")}
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        {title}
                        <span className="text-primary-custom">.</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-sm  text-center leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
                        {subtitle}
                    </p>
                </header>


                <article className="min-h-64 rounded-2xl border border-slate-200/70 bg-slate-100/80 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-950/80 sm:rounded-3xl sm:p-8 md:p-10">
                    <div className="legal-content max-w-none break-words text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base sm:leading-8 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2]:first:mt-0 dark:[&_h2]:text-white [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 dark:[&_h3]:text-white [&_p]:mb-5 [&_a]:break-all [&_a]:text-primary-custom [&_a]:underline-offset-4 hover:[&_a]:underline [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                        {children}
                    </div>
                </article>
            </section>

            <Footer />
        </main>
    );
}

export default LegalPageLayout;
