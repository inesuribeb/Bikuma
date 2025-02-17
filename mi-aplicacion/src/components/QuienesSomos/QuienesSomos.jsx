import Button from "../button/Button";
import './QuienesSomos.css'

function QuienesSomos () {
    return (
        <div className="quienes-somos-content">
            <div className="first-column-qs">
                <img src="/images/Ilustracion2.png" alt="" />
            </div>
            <div className="second-column-qs">
                <h1>Somos consultores en Accesibilidad Universal</h1>
                <p>Nuestro objetivo es que todas las personas puedan desenvolverse en cualquier entorno con independencia y accedan a todos los recursos del mismo con facilidad. <br />Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con las normativas y abrirlo a todas las personas.</p>
                <Button
                    variant="solid"
                    onClick={() => console.log('Contactar')}
                >
                    Contacta con nosotros
                </Button>
            </div>
            
        </div>
    )
}

export default QuienesSomos;