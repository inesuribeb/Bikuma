import ProductCard from "./ProductCard";
import Subtitulo from "../subtitulos/Subtitulo";
import './Productos.css'

function Productos() {
    return (
        <div className="product-section-container">
            <Subtitulo subtitulo="Productos" />
            <div className="all-products-container">
                <ProductCard
                    img="/images/productos/abc.jpeg"
                    title="Señalización. Diseño, validación y fabricación"
                />
                <ProductCard
                    img="/images/productos/alcudia.jpeg"
                    title="Planos y cuadros tactovisuales"
                />
                <ProductCard
                    img="/images/productos/jazz.png"
                    title="Papelería, vinilos y etiquetas"
                />
                <ProductCard
                    img="/images/productos/puntodis.jpeg"
                    title="Pavimento tactil"
                />
            </div>
        </div>
    )
}

export default Productos;