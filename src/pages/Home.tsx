
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About.tsx";
import Mystack from "@/components/mystack/MyStack.tsx";
function Home() {
    return (
        <main >
            <div >
                <Hero />
                <About />
                <Mystack />
            </div>
        </main>
    );
}

export default Home;
