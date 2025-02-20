import ServicioCard from "../CTA/ServicioCard";
import Subtitulo from "../subtitulos/Subtitulo";
import './BloqueServicios.css'

function BloqueServicios() {
    return (
        <div className='servicios-main-container'>
            <Subtitulo subtitulo="Servicios" />
            <div className='servicios-container'>
                <ServicioCard
                    braileLogo="/images/Braile.png"
                    title="Accesibilidad en comunicación"
                    description="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida"
                />
                <ServicioCard
                    braileLogo="/images/Braile2.png"
                    title="Servicios de digitalización"
                    description="Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget"
                />
                <ServicioCard
                    braileLogo="/images/Braile3.png"
                    title="Diagnósticos y planes estratégicos"
                    description="Aliquam vitae mauris non augue sollicitudin porttitorodio vehicula"
                />
                <ServicioCard
                    braileLogo="/images/Braile4.png"
                    title="Evacuación y emergencia"
                    description="Donec et nibh facilisis, lobortis lacus non, viverra ante integer"
                />
                <ServicioCard
                    braileLogo="/images/Braile5.png"
                    title="Formación e inclusión"
                    description="Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget"
                />
                <ServicioCard
                    braileLogo="/images/Braile6.png"
                    title="Restauración inclusiva"
                    description="Donec et nibh facilisis, lobortis lacus non, viverra ante integer"
                />
                <ServicioCard
                    braileLogo="/images/Braile7.png"
                    title="Simulación de entornos 3D"
                    description="Donec et nibh facilisis, lobortis lacus non, viverra ante integer "
                />
            </div>
        </div>
    )
}

export default BloqueServicios;