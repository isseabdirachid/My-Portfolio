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
        image: "/images/projects/project-1.png",
        title: "Project One",
        description: "Description of project one.",
        github: "https://github.com/your-username/project-one",
        label: "Project",
    },
    {
        id: "project-2",
        image: "/images/projects/project-2.png",
        title: "Project Two",
        description: "Description of project two.",
        github: "https://github.com/your-username/project-two",
        label: "Project",
    },
    {
        id: "project-3",
        image: "/images/projects/project-3.png",
        title: "Project Three",
        description: "Description of project three.",
        github: "https://github.com/your-username/project-three",
        label: "Project",
    },
    {
        id: "project-4",
        image: "/images/projects/project-4.png",
        title: "Project Four",
        description: "Description of project four.",
        github: "https://github.com/your-username/project-four",
        label: "Project",
    },
    {
        id: "project-5",
        image: "/images/projects/project-5.png",
        title: "Project Five",
        description: "Description of project five.",
        github: "https://github.com/your-username/project-five",
        label: "Project",
    },
    {
        id: "project-6",
        image: "/images/projects/project-6.png",
        title: "Project Six",
        description: "Description of project six.",
        github: "https://github.com/your-username/project-six",
        label: "Project",
    },
];
