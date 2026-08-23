import HeroActions from "./HeroActions";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocials from "./HeroSocials";

function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:gap-20 lg:py-20">
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
