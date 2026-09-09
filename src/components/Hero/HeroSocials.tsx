import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {
        name: "GitHub",
        href: "https://github.com/isseabdirachid",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/isse-abdirachid-5019a4343/",
        icon: FaLinkedin,
    },
    {
        name: "Email",
        href: "mailto:your@email.com",
        icon: Mail,
    },
];

function HeroSocials() {
    return (
        <div className="mt-4 flex items-center gap-3 lg:-translate-x-8">
            {socials.map((social) => {
                const Icon = social.icon;

                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target={
                            social.name === "Email" ? undefined : "_blank"
                        }
                        rel={
                            social.name === "Email" ? undefined : "noreferrer"
                        }
                        aria-label={social.name}
                        className="
                            flex size-10 items-center justify-center rounded-full
                            border border-primary-custom/50
                            text-primary-custom
                            transition-all duration-300 ease-out
                            hover:-translate-y-1 hover:scale-110
                            hover:border-primary-custom/30
                            hover:bg-primary-custom/30
                            hover:text-primary-custom
                            hover:shadow-secondary-custom
                            active:scale-95
                            md:-translate-x-22
                        "
                    >
                        <Icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                );
            })}
        </div>
    );
}

export default HeroSocials;
