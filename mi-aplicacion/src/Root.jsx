import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import HamburguerHeader from "./components/Header/HamburguerHeader";
import Footer from "./components/Footer/Footer";
import "./Root.css";

function Root() {

    const [isMobileView, setIsMobileView] = useState(false);
    
    useEffect(() => {
        // Función para verificar el ancho de la pantalla
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth <= 1024); // Ajusta este valor según necesites
        };
        
        // Comprobar al cargar
        checkScreenSize();
        
        // Agregar event listener para redimensión
        window.addEventListener('resize', checkScreenSize);
        
        // Limpiar event listener
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <>
        {/* <Header /> */}
        {isMobileView ? <HamburguerHeader /> : <Header />}
        <Outlet  />
        <Footer />
        </>
    );
}

export default Root;