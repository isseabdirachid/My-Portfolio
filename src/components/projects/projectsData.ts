import PortfolioImage1 from "@/assets/images/Portofolio.png";
export interface Project {
    id: string;
    image: string;
    title: string;
    github: string;
    label?: string;
    color?: string;
}

export const projectsData: Project[] = [
    {
        id: "project-1",
        image: PortfolioImage1,
        title: "projects.project1.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-2",
        image: PortfolioImage1,
        title: "projects.project2.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-3",
        image: PortfolioImage1,
        title: "projects.project3.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-4",
        image: PortfolioImage1,
        title: "projects.project4.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-5",
        image: PortfolioImage1,
        title: "projects.project5.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-6",
        image: PortfolioImage1,
        title: "projects.project6.title",
        github: "https://github.com/isseabdirachid",
        label: "Future Project",
    },
];
