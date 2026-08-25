import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

function About() {
    return (
        <section
            id="about"
            className="w-full py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 sm:gap-10 lg:grid-cols-2 lg:gap-20">
                <AboutImage />

                <AboutContent />
            </div>
        </section>
    );
}

export default About;
