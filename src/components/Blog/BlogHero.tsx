import React from "react";
import { useTranslation } from "react-i18next";
import ShinyText from "@/components/animations/ShinyText";

import BlogSearch from "./BlogSearch";
import BlogFilter from "./BlogFilter";

const CATEGORIES = ["all", "news", "fullstack", "ai"];
const SORTS = ["newest", "oldest"];

interface BlogHeroProps {
    query: string;
    onQueryChange: (value: string) => void;
    category: string;
    onCategoryChange: (value: string) => void;
    sort: string;
    onSortChange: (value: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({
                                               query,
                                               onQueryChange,
                                               category,
                                               onCategoryChange,
                                               sort,
                                               onSortChange,
                                           }) => {
    const { t } = useTranslation();

    return (
        <section id="blog" className="px-6 pb-10 pt-16">
            <div className="mx-auto max-w-6xl">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
                        <ShinyText
                            text={t("blog.title")}
                            speed={2}
                            delay={0}
                            color="currentColor"
                            shineColor="#F97316"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                            className="font-bold text-slate-900 dark:text-white overflow-visible leading-[1.3]"
                        />
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl whitespace-pre-line px-4 text-base text-slate-600 dark:text-slate-400">
                        {t("blog.subtitle")}
                    </p>
                </header>

                <div className="mt-8 flex items-center gap-3">
                    <BlogSearch value={query} onChange={onQueryChange} />
                    <BlogFilter
                        categories={CATEGORIES}
                        sorts={SORTS}
                        category={category}
                        sort={sort}
                        onCategoryChange={onCategoryChange}
                        onSortChange={onSortChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
