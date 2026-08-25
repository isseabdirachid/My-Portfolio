import HeroActions from "./HeroActions";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocials from "./HeroSocials";

function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-12 md:px-6 md:py-16 lg:gap-20 lg:py-20">
                <div className="flex flex-col">
                    <HeroContent />

                    <HeroActions />
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <HeroImage />
                    <HeroSocials />
                </div>
            </div>
        </section>
    );
}

export default Hero;
