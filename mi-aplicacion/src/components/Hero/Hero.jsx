import Button from "../button/Button";
import { ArrowRight } from "lucide-react";
import './Hero.css'

function Hero() {
    return (
        <div className="hero-content">
            <div className="first-column-hc">
                <h1>¿Cumples con las normativas de accesibilidad universal?</h1>
                <p>Actualiza tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas</p>
                <Button
                    variant="solid"
                    size="large"
                    onClick={() => console.log('Contactar')}
                >
                    Contacta con nosotros <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>
            <div className="blue-background-overlay"></div>
            <div className="second-column-hc">
                <img src="/images/Ilustracion3.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;