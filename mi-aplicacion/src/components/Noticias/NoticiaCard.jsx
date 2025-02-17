import './NoticiaCard.css'

function NoticiaCard({ img, title, newsDescription }) {
    return (
            <div className="noticiaCard-container">
                <img src={img} alt={title} />
                <div className="noticiaCard-info">
                    <h5>{title}</h5>
                    <p>{newsDescription}</p>
                </div>
            </div>
    )
}

export default NoticiaCard;