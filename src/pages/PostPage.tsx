import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

import Footer from "@/components/Footer/Footer";
import postData from "@/data/post.json";

type Block =
    | { type: "text"; text: string }
    | { type: "heading"; text: string }
    | { type: "quote"; text: string }
    | { type: "image"; src: string; caption?: string }
    | { type: "video"; youtubeId: string };

const images = import.meta.glob("../assets/BlogImages/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const getImage = (name?: string) =>
    name ? images[`../assets/BlogImages/${name}`] : undefined;

const renderBlock = (block: Block, i: number) => {
    switch (block.type) {
        case "heading":
            return (
                <h2 key={i} className="pt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    {block.text}
                </h2>
            );
        case "text":
            return (
                <p key={i} className="text-lg leading-8 text-slate-800 dark:text-slate-200">
                    {block.text}
                </p>
            );
        case "quote":
            return (
                <blockquote
                    key={i}
                    className="border-l-4 border-orange-500 pl-5 text-lg italic leading-8 text-slate-700 dark:text-slate-300"
                >
                    {block.text}
                </blockquote>
            );
        case "image": {
            const src = getImage(block.src);
            if (!src) return null;
            return (
                <figure key={i}>
                    <img src={src} alt={block.caption ?? ""} loading="lazy" className="w-full rounded-2xl" />
                    {block.caption && (
                        <figcaption className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );
        }
        case "video":
            return (
                <div key={i} className="aspect-video overflow-hidden rounded-2xl">
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
                        title="Video"
                        allowFullScreen
                        className="h-full w-full"
                    />
                </div>
            );
        default:
            return null;
    }
};

const PostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, i18n } = useTranslation();
    const lang = i18n.language?.startsWith("en") ? "en" : "de";

    const post = postData.find((p) => p.slug === slug);

    if (!post) {
        return (
            <main>
                <div className="bg-stone-50 px-6 py-24 text-center dark:bg-slate-950">
                    <p className="text-lg text-slate-700 dark:text-slate-300">{t("blog.notFound")}</p>
                    <Link to="/blog" className="mt-4 inline-block font-semibold text-orange-700 dark:text-orange-400">
                        {t("blog.back")}
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const text = post[lang] ?? post.de;
    const content = (Array.isArray(text.content) ? text.content : []) as unknown as Block[];
    const cover = getImage(post.image);
    const category = t(`blog.categories.${post.category}`);
    const date = new Intl.DateTimeFormat(i18n.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(post.date));

    return (
        <main>
            <article className="bg-stone-50 px-6 py-16 dark:bg-slate-950">
                <div className="mx-auto max-w-[700px]">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 dark:text-orange-400"
                    >
                        <ArrowLeft size={16} aria-hidden="true" /> {t("blog.back")}
                    </Link>

                    <div className="mt-8 text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400">
                            {category}
                        </span>{" "}
                        · {date}
                    </div>

                    <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl dark:text-white">
                        {text.title}
                    </h1>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{text.excerpt}</p>
                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        {post.author} · {post.readTime} {t("blog.minRead")}
                    </div>

                    {cover && (
                        <img src={cover} alt={text.title} className="mt-8 w-full rounded-2xl" />
                    )}

                    <div className="mt-10 space-y-6">{content.map(renderBlock)}</div>
                </div>
            </article>
            <Footer />
        </main>
    );
};

export default PostPage;
