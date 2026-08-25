import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

function About() {
    return (
        <section
            id="about"
            className="w-full sm:py-1 lg:py-20"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 sm:gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="order-2 sm:order-1">
                    <AboutImage />
                </div>

                <div className="order-1 sm:order-2">
                    <AboutContent />
                </div>
            </div>
        </section>
    );
}

export default About;
