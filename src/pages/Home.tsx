
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About.tsx";
import Mystack from "@/components/mystack/MyStack.tsx";
import Game from "@/components/Game/Game.tsx";
import Projects from "@/components/projects/Projects.tsx"
import Testimonials from "@/components/testimonials/Testimonials.tsx"
function Home() {
    return (
        <main >
            <div >
                <Hero />
                <About />
                <Mystack />
                <Game />
                <Projects />
                <Testimonials />
            </div>
        </main>
    );
}

export default Home;
