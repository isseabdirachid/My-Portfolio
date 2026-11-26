import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import BlogHero from "@/components/Blog/BlogHero";
import BlogGrid from "@/components/Blog/BlogGrid";
import type { BlogPost } from "@/components/Blog/BlogCard";
import Footer from "@/components/Footer/Footer";

function Blog() {
    const { t } = useTranslation();

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("newest");

    const rawPosts = t("blog.posts", { returnObjects: true });
    const posts: BlogPost[] = Array.isArray(rawPosts) ? (rawPosts as BlogPost[]) : [];

    const visiblePosts = useMemo(() => {
        const q = query.trim().toLowerCase();

        return posts
        .filter(
            (post) =>
                (category === "all" || post.category === category) &&
                (!q ||
                    post.title.toLowerCase().includes(q) ||
                    post.excerpt.toLowerCase().includes(q))
        )
        .sort((a, b) =>
            sort === "newest"
                ? b.date.localeCompare(a.date)
                : a.date.localeCompare(b.date)
        );
    }, [posts, query, category, sort]);

    return (
        <main>
            <div className="bg-stone-50 dark:bg-slate-950">
                <BlogHero
                    query={query}
                    onQueryChange={setQuery}
                    category={category}
                    onCategoryChange={setCategory}
                    sort={sort}
                    onSortChange={setSort}
                />
                <BlogGrid posts={visiblePosts} />
            </div>
            <Footer />
        </main>
    );
}

export default Blog;
