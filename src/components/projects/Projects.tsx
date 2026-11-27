import { useTranslation } from "react-i18next";

import MagicBento from "@/components/shared/MagicBento";
import { projectsData } from "./projectsData";
import ShinyText from "@/components/animations/ShinyText.tsx";

function Projects() {
    const { t } = useTranslation();

    const items = projectsData.map((project) => ({
        ...project,
        title: t(project.title),
    }));

    return (
        <section
            id="projects"
            className="min-h-screen px-6 py-16"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h3 className="text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
                        <ShinyText
                            text={t("projects.title")}
                            speed={2}
                            delay={0}
                            color="currentColor"
                            shineColor="#F97316"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                            className=" text-slate-900 dark:text-white overflow-visible leading-[1.5]"
                        />
                    </h3>

                    <p className="mx-auto mt-2 max-w-2xl px-4 text-base leading-6 text-secondary-custom/60 sm:px-0 sm:text-lg">
                        {t("projects.description")}
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl px-4 text-md text-primary-custom sm:px-0">
                        {t("projects.note")}
                    </p>
                </div>

                <MagicBento
                    items={items}
                    textAutoHide={false}
                    enableStars
                    enableSpotlight
                    enableBorderGlow
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="132, 0, 255"
                    disableAnimations={false}
                />
            </div>
        </section>
    );
}

export default Projects;
