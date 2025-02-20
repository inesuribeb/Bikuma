import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import HamburguerHeader from "./components/Header/HamburguerHeader";
import Footer from "./components/Footer/Footer";
import "./Root.css";

function Root() {

    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth <= 1024);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
            {isMobileView ? <HamburguerHeader /> : <Header />}
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;