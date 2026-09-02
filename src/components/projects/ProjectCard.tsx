import { useTranslation } from "react-i18next";

import type { Project } from "./projectsData";

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useTranslation();

    return (
        <article className="group overflow-hidden rounded-2xl">
            <img
                src={project.image}
                alt={t(project.title)}
                className="h-full w-full object-cover"
            />

            <div className="p-5">
                <h3 className="text-xl font-semibold text-secondary-custom">
                    {t(project.title)}
                </h3>

                <p className="mt-2 text-sm leading-6 text-secondary-custom/70">
                    {t(project.description)}
                </p>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-primary-custom transition-opacity hover:opacity-70"
                >
                    {t("projects.viewGithub")}
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;
