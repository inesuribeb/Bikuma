import { MapPin } from "lucide-react";
import './NoticiaCard.css'

function NoticiaCard({ img, title, newsDescription, isProject }) {
    return (
        <div className="noticiaCard-container">
            <img src={img} alt={title} />
            <div className="noticiaCard-info">
                {isProject ? (
                    <>
                        <p>{newsDescription}</p>
                        <div className="location-title">
                            <MapPin />
                            <h5>{title}</h5>
                        </div>
                    </>
                ) : (
                    <>
                        <h5>{title}</h5>
                        <p>{newsDescription}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default NoticiaCard;