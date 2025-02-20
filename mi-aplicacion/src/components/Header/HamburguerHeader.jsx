import { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import Button from '../button/Button';
import './HamburguerHeader.css'

function HamburguerHeader() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <header className="mobileHeader">
            <div className="mobileHeaderTop">
                <div className="mobileHeaderLogo">
                    <img src="/images/puntoDisHeader.png" alt="Puntodis Logo" />
                </div>
                
                <button 
                    className="hamburgerButton"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            
            {isOpen && (
                <div className="mobileMenu" aria-hidden={!isOpen}>
                    <nav className="mobileNav">
                        <ul>
                            <li>Servicios</li>
                            <li>Productos</li>
                            <li>Administración Pública</li>
                            <li>Conócenos</li>
                            <li>Actualidad</li>
                        </ul>
                    </nav>
                    
                    <div className="mobileButtons">
                        <Button
                            variant="solid"
                            size="default"
                            onClick={() => console.log('Contactar')}
                        >
                            Contactar
                        </Button>

                        <Button
                            variant="outline"
                            size="default"
                            onClick={() => console.log('Tienda')}
                            icon={<ShoppingCart size={20} />}
                        >
                            Tienda
                        </Button>
                        
                        <div className="searchContainer">
                            <Search 
                                size={20} 
                                className="cursor-pointer"
                                onClick={() => console.log('Búsqueda')}
                            />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default HamburguerHeader;