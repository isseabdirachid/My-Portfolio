import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "@/components/About/About.tsx";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import MainLayout from "@/layouts/MainLayout";
import Background from "@/components/animations/Background";

function App() {
    return (
        <BrowserRouter>
            <Background />

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
