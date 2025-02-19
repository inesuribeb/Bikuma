import { useEffect } from "react";
import Subtitulo from "../subtitulos/Subtitulo";
import NoticiaCard from "./NoticiaCard";
import './Noticias.css'

function Noticias() {
    useEffect(() => {
        const container = document.querySelector('.all-news-container');
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
        <div className="noticias-container">
            <Subtitulo subtitulo="Conoce las últimas novedades de Puntodis" />
            <div className="all-news-container">
                <NoticiaCard
                    img="/images/noticias/noticias1.jpeg"
                    title="Turismo"
                    newsDescription="¿Tienes cita en Fitur? La accesibilidad estará en tu agenda"
                />
                <NoticiaCard
                    img="/images/noticias/noticias2.png"
                    title="Análisis"
                    newsDescription="Piensa en más accesibilidad para personas con Asperger"
                />
                <NoticiaCard
                    img="/images/noticias/noticias3.jpeg"
                    title="Proyecto"
                    newsDescription="Polideportivos con accesibilidad en Bilbao Kirolak"
                />
                <NoticiaCard
                    img="/images/noticias/noticias4.png"
                    title="Título de la noticia"
                    newsDescription="¿Tienes cita en Fitur? La accesibilidad estará en tu agenda"
                />
                <NoticiaCard
                    img="/images/noticias/noticias5.png"
                    title="Turismo"
                    newsDescription="¿Tienes cita en Fitur? La accesibilidad estará en tu agenda"
                />
            </div>
        </div>
    )
}

export default Noticias;