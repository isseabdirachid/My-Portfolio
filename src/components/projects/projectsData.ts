export interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
    github: string;
    label?: string;
    color?: string;
}

export const projectsData: Project[] = [
    {
        id: "project-1",
        image: "/images/future-project.png",
        title: "projects.project1.title",
        description: "projects.project1.description",
        github: "https://github.com/your-username/project-one",
        label: "Project",
    },
    {
        id: "project-2",
        image: "/images/future-project.png",
        title: "projects.project2.title",
        description: "projects.project2.description",
        github: "https://github.com/your-username/project-two",
        label: "Project",
    },
    {
        id: "project-3",
        image: "/images/future-project.png",
        title: "projects.project3.title",
        description: "projects.project3.description",
        github: "https://github.com/your-username/project-three",
        label: "Project",
    },
    {
        id: "project-4",
        image: "/images/future-project.png",
        title: "projects.project4.title",
        description: "projects.project4.description",
        github: "https://github.com/your-username/project-four",
        label: "Project",
    },
    {
        id: "project-5",
        image: "/images/future-project.png",
        title: "projects.project5.title",
        description: "projects.project5.description",
        github: "https://github.com/your-username/project-five",
        label: "Project",
    },
    {
        id: "project-6",
        image: "/images/future-project.png",
        title: "projects.project6.title",
        description: "projects.project6.description",
        github: "#",
        label: "Future Project",
    },
];
