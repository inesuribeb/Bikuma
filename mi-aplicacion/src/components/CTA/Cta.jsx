import ServicioCard from './ServicioCard'
import './Cta.css'

function Cta() {
    return (
        <div className='cta-main-container'>
            <div className='servicios-container'>
                <ServicioCard
                    braileLogo="/images/Braile.png"
                    title="Tienda online"
                    description="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida"
                />
                <ServicioCard
                    braileLogo="/images/Braile2.png"
                    title="Administración Pública"
                    description="Nullam facilisis ligula et enim ultrices sagittis Aenean at felis eget"
                />
                <ServicioCard
                    braileLogo="/images/Braile3.png"
                    title="Fabricamos a medida"
                    description="Aliquam vitae mauris non augue sollicitudin porttitorodio vehicula"
                />
                <ServicioCard
                    braileLogo="/images/Braile4.png"
                    title="Digitalización accesible"
                    description="Donec et nibh facilisis, lobortis lacus non, viverra ante integer"
                />
            </div>
        </div>
    )
}

export default Cta;