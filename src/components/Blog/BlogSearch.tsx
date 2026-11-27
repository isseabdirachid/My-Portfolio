import React from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";

interface BlogSearchProps {
    value: string;
    onChange: (value: string) => void;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ value, onChange }) => {
    const { t } = useTranslation();

    return (
        <div className="relative flex-1">
            <Search
                size={18}
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={t("blog.searchPlaceholder")}
                aria-label={t("blog.searchLabel")}
                className="w-full rounded-full border border-slate-300 bg-white py-4 pl-12 pr-5 text-base text-slate-900 outline-none transition focus:border-primary-custom focus:ring-2 focus:ring-primary-custom dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
        </div>
    );
};

export default BlogSearch;
