import React from "react";
import { useTranslation } from "react-i18next";

import BlogCard, { type BlogPost } from "./BlogCard";

interface BlogGridProps {
    posts: BlogPost[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
    const { t } = useTranslation();

    return (
        <section className="mx-auto max-w-6xl px-6 pb-20">
            {posts.length === 0 ? (
                <p className="py-16 text-center text-slate-600 dark:text-slate-400">
                    {t("blog.empty")}
                </p>
            ) : (
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default BlogGrid;
