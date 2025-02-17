import Hero from '../components/Hero/Hero'
import Cta from '../components/CTA/Cta'
import Noticias from '../components/Noticias/Noticias'
import BloqueServicios from '../components/BloqueServicios/BloqueServicios'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Productos from '../components/Productos/Productos'
import Proyectos from '../components/Proyectos/Proyectos'
import Logotipos from '../components/Logotipos/Logotipos'

function Home () {
    return (
        <div>
            <Hero />
            <Cta />
            <Noticias />
            <BloqueServicios />
            <QuienesSomos />
            <Productos />
            <Proyectos />
            <Logotipos />
        </div>
    )
}

export default Home;