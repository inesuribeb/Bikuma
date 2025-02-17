import Button from "../button/Button";
import './Hero.css'

function Hero() {
    return (
        <div className="hero-content">
            <div className="first-column-hc">
                <h1>¿Cumples con las normativas de accesibilidad universal?</h1>
                <p>Actualiza tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas</p>
                <Button
                    variant="solid"
                    onClick={() => console.log('Contactar')}
                >
                    Contacta con nosotros
                </Button>
            </div>
            <div className="second-column-hc">
                <img src="/images/Ilustracion.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;