import { Outlet } from "react-router-dom";

import Navbar from "@/components/shared/Navbar.tsx";

function MainLayout() {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default MainLayout;
