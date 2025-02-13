import ServicioCard from './ServicioCard'

function Cta() {
    return (
        <div>
            <ServicioCard
                braileLogo="/images/Braile.png"
                title="Tienda online"
                description="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida"
            />
            <ServicioCard
                braileLogo="/images/Braile2.png"
                title="Administración Pública"
                description="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida"
            />
            <ServicioCard
                braileLogo="/images/Braile3.png"
                title="Fabricamos a medida"
                description="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida"
            />
            <ServicioCard
                braileLogo="/images/Braile4.png"
                title="Digitalización accesible"
                description="Mauris et turpis tellus. Nullam facilisis, arcu quis lobortis gravida"
            />
        </div>
    )
}

export default Cta;