import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

export interface BlogPost {
    slug: string;
    image?: string;
    category: string;
    date: string;
    readTime: number;
    author: string;
    title: string;
    excerpt: string;
}

const COVER_COLORS: Record<string, string> = {
    news: "bg-sky-100 dark:bg-sky-950",
    fullstack: "bg-orange-100 dark:bg-orange-950",
    ai: "bg-amber-100 dark:bg-amber-950",
};

// Sawirrada oo dhan ee src/assets/BlogImages (Vite wuxuu u beddelaa URL)
const images = import.meta.glob("../../assets/BlogImages/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const { t, i18n } = useTranslation();

    const date = new Intl.DateTimeFormat(i18n.language, {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(post.date));

    const category = t(`blog.categories.${post.category}`);

    const imageSrc = post.image
        ? images[`../../assets/BlogImages/${post.image}`]
        : undefined;

    return (
        <a
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
        >
            <div className="aspect-video overflow-hidden">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`flex h-full items-center justify-center font-bold text-slate-700 transition duration-500 group-hover:scale-105 dark:text-slate-200 ${
                            COVER_COLORS[post.category] ?? "bg-slate-200 dark:bg-slate-800"
                        }`}
                    >
                        {category}
                    </div>
                )}
            </div>

            <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
                    {category}
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900 dark:text-white">
                    {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                </p>
                <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    {post.author} · {date} · {post.readTime} {t("blog.minRead")}
                </div>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-orange-700 opacity-0 transition duration-300 group-hover:opacity-100 dark:text-orange-400">
                    {t("blog.readMore")} <ArrowRight size={16} />
                </div>
            </div>
        </a>
    );
};

export default BlogCard;
