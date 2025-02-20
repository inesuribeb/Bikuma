import Button from "../button/Button";
import FooterForm from "./FooterForm";
import { ArrowRight } from "lucide-react";
import './Footer.css'

function Footer() {
    return (
        <section className="footerContent">
            <div className="col1">
                <div className="col1-footerLogo">
                    <img src="/images/puntodisFooter.png" alt="Puntodis Logo" />
                </div>
                <div className="col1-info">
                    <p>Actualiza con nosotros tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas</p>
                </div>
                <div className="col1-button">
                    <Button
                        variant="solid"
                        size="large"
                        onClick={() => console.log('Contactar')}
                    >
                        Contactar <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
                <div className="col1-logos">
                    <img src="/images/logosFooterCol1.png" alt="Logos" />
                </div>
            </div>

            <div className="col2">
                <div className="col2-menu">
                    <nav>
                        <ul>
                            <li>Productos</li>
                            <li>Servicios</li>
                            <li>Administración pública</li>
                            <li>Conócenos</li>
                            <li>Actualidad</li>
                            <li>Tienda</li>
                        </ul>
                    </nav>
                </div>
                <div className="col2-form">
                    <FooterForm />
                </div>
            </div>
        </section>
    )
}

export default Footer;