import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import MainLayout from "@/layouts/MainLayout";
import Background from "@/components/animations/Background";
import About from "@/pages/About";
import LegalNotice from "@/components/PrivacyPolicy/LegalNotice.tsx";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy.tsx";

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
                    <Route path="/Impressum" element={<LegalNotice />} />
                    <Route path="/Datenschutz" element={<PrivacyPolicy />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
