import { useTranslation } from "react-i18next";

import MagicBento from "@/components/shared/MagicBento"
import { projectsData } from "./projectsData";
import ShinyText from "@/components/animations/ShinyText.tsx";

function Projects() {
    const { t } = useTranslation();

    const items = projectsData.map((project) => ({
        ...project,
        title: t(project.title),
        description: t(project.description),
    }));

    return (
        <section
            id="projects"
            className="w-full px-6 py-16 sm:py-18 lg:py-20"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h3 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-secondary-custom sm:text-5xl">
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
                            className="font-semibold text-slate-900 dark:text-white"
                        />
                    </h3>

                    <p className="mx-auto mt-3 max-w-2xl px-4 text-base leading-6 text-secondary-custom/60 sm:px-0 sm:text-lg">
                        {t("projects.description")}
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
