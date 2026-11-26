import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SlidersHorizontal } from "lucide-react";

interface BlogFilterProps {
    categories: string[];
    sorts: string[];
    category: string;
    sort: string;
    onCategoryChange: (category: string) => void;
    onSortChange: (sort: string) => void;
}

const optionClass = (selected: boolean) =>
    `min-h-11 rounded-full border px-4 text-sm font-medium transition ${
        selected
            ? "border-orange-500 bg-orange-500 text-white"
            : "border-slate-300 text-slate-800 hover:border-orange-400 dark:border-slate-700 dark:text-slate-200"
    }`;

const BlogFilter: React.FC<BlogFilterProps> = ({
                                                   categories,
                                                   sorts,
                                                   category,
                                                   sort,
                                                   onCategoryChange,
                                                   onSortChange,
                                               }) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const hasActiveFilter = category !== "all" || sort !== sorts[0];

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="relative flex min-h-[58px] items-center gap-2 rounded-full border border-slate-300 bg-white px-6 font-semibold text-slate-900 transition hover:border-primary-custom dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
                <SlidersHorizontal size={17} aria-hidden="true" />
                {t("blog.filters")}
                {hasActiveFilter && (
                    <span className="absolute right-3 top-3 size-2.5 rounded-full bg-primary-custom" />
                )}
            </button>

            {open && (
                <div className="absolute right-0 top-full z-10 mt-2 w-72 space-y-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                            {t("blog.filterCategory")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((id) => (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => onCategoryChange(id)}
                                    aria-pressed={category === id}
                                    className={optionClass(category === id)}
                                >
                                    {t(`blog.categories.${id}`)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                            {t("blog.filterSort")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {sorts.map((id) => (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => onSortChange(id)}
                                    aria-pressed={sort === id}
                                    className={optionClass(sort === id)}
                                >
                                    {t(`blog.sort.${id}`)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogFilter;
