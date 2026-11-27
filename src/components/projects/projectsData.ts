import Dataextraction from "@/assets/Project-images/Data extraction-rafiki2.png"
import Handcoding  from "@/assets/Project-images/Hand coding-pana.svg"
import Dashboard from "@/assets/Project-images/Dashboard-cuate.svg"
import Static  from "@/assets/Project-images/Static website-amico.svg"
import Connected from "@/assets/Project-images/Connected-cuate.svg"
import Handcodingamico from "@/assets/Project-images/Hand coding-amico.svg"
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
        image: Static,
        title: "projects.project1.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "Project-2",
        image: Connected,
        title: "projects.project2.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-3",
        image: Dataextraction,
        title: "projects.project3.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-4",
        image: Dashboard,
        title: "projects.project4.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-5",
        image: Handcodingamico,
        title: "projects.project5.title",
        github: "https://github.com/isseabdirachid",
        label: "Project",
    },
    {
        id: "project-6",
        image: Handcoding,
        title: "projects.project6.title",
        github: "https://github.com/isseabdirachid",
        label: "Future Project",
    },
];
