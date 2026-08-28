
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About.tsx";
import Mystack from "@/components/mystack/MyStack.tsx";
import Game from "@/components/Game/Game.tsx";
function Home() {
    return (
        <main >
            <div >
                <Hero />
                <About />
                <Mystack />
                <Game />
            </div>
        </main>
    );
}

export default Home;
