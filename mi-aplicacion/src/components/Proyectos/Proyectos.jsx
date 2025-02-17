import { useEffect } from "react";
import Subtitulo from "../subtitulos/Subtitulo";
import NoticiaCard from "../Noticias/NoticiaCard";
import './Proyectos.css'

function Proyectos () {
    useEffect(() => {
        const container = document.querySelector('.all-projects-container');
        const centerElement = container.children[Math.floor(container.children.length / 2)];
        
        if (centerElement) {
            const scrollTo = centerElement.offsetLeft - (container.offsetWidth / 2) + (centerElement.offsetWidth / 2);
            container.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            });
        }
    }, []);
    return (
        <div className="proyectos-main-container">
            <Subtitulo subtitulo="Proyectos de accesibilidad universal" />
            <div className="all-projects-container">
                <NoticiaCard
                    img="/images/proyectos/proyecto1.png"
                    title="Bilbao"
                    newsDescription="Manual de señalización accesible para un mundo más inclusivo"
                    isProject={true}
                />
                <NoticiaCard
                    img="/images/proyectos/proyecto2.jpeg"
                    title="Bilbao"
                    newsDescription="La estrategia integral para el fomento de la accesibilidad en bilbobus"
                    isProject={true}
                />
                <NoticiaCard
                    img="/images/proyectos/proyecto3.jpeg"
                    title="Bilbao"
                    newsDescription="Alhóndiga bilbao – centro azkuna, pensando en la accesibilidad para todos"
                    isProject={true} 
                />
                <NoticiaCard
                    img="/images/proyectos/proyecto5.jpeg"
                    title="Vila Joiosa "
                    newsDescription="Vilamuseu «museos para todos»"
                    isProject={true}
                />
                <NoticiaCard
                    img="/images/proyectos/proyecto6.jpeg"
                    title="Turismo"
                    newsDescription="¿Tienes cita en Fitur? La accesibilidad estará en tu agenda"
                    isProject={true}
                />

            </div>
        </div>
    )
}

export default Proyectos;