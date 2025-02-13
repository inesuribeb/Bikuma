function ServicioCard ({ braileLogo, title, description }) {
    return (
        <div className="single-servicio-card">
            <img src={braileLogo} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ServicioCard;