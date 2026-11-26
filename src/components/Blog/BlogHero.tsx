import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ShinyText from "@/components/animations/ShinyText";

import BlogSearch from "./BlogSearch";
import BlogFilter from "./BlogFilter";

const CATEGORIES = ["all", "news", "fullstack", "ai"];
const SORTS = ["newest", "oldest"];

const BlogHero: React.FC = () => {
    const { t } = useTranslation();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("newest");

    return (
        <section id="blog" className="min-h-screen bg-stone-50 px-6 py-16 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 md:text-5xl dark:text-white ">
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
                    <p className="mx-auto mt-3 w-full max-w-full px-4 text-base text-slate-600 dark:text-slate-400  md:max-w-2/3 sm:max-w-2/3 sm:text-md">
                        {t("blog.subtitle")}
                    </p>
                </header>

                <div className="mt-8 flex items-center gap-3">
                    <BlogSearch value={query} onChange={setQuery} />
                    <BlogFilter
                        categories={CATEGORIES}
                        sorts={SORTS}
                        category={category}
                        sort={sort}
                        onCategoryChange={setCategory}
                        onSortChange={setSort}
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
