import './FooterForm.css'

function FooterForm() {
    return (
        <div className="newsletter-container">
            <h2>¿Quieres estar al día con las noticias de accesibilidad?</h2>
            <p>Suscríbete a la newsletter</p>
            <form className="newsletter-form">
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="form-input"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input"
                />
                <div className="privacy-check">
                    <input 
                        type="checkbox" 
                        id="privacy"
                    />
                    <label htmlFor="privacy">Acepto la política de privacidad</label>
                </div>
                <button type="submit" className="submit-button">
                    Suscribirse
                </button>
            </form>
        </div>
    )
}

export default FooterForm;