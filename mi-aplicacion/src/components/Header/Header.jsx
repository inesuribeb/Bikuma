import Button from '../button/Button';
import { ShoppingCart, Search } from 'lucide-react';
import './Header.css'

function Header() {
    return (
        <header className="headerContent">
            <div className="headerLogo">
                <img src="/images/headerLogo.png" alt="Puntodis Logo" />
            </div>
            <nav className="headerUl">
                <ul>
                    <li>Servicios</li>
                    <li>Productos</li>
                    <li>Administración Pública</li>
                    <li>Conócenos</li>
                    <li>Actualidad</li>
                </ul>
            </nav>
            <div className="headerButtons">
                <div>
                    <Button
                        variant="solid"
                        onClick={() => console.log('Contactar')}
                    >
                        Contactar
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => console.log('Tienda')}
                        icon={<ShoppingCart size={20} />}
                    >
                        Tienda
                    </Button>

                    <Search 
                        size={20} 
                        className="cursor-pointer"
                        onClick={() => console.log('Búsqueda')}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;