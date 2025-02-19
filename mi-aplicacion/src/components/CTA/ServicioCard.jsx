import './ServicioCard.css'

function ServicioCard({ braileLogo, title, description }) {
    return (
        <div className="single-servicio-card">
            <div className='card-info'>
                <img src={braileLogo} alt={title} />
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServicioCard;