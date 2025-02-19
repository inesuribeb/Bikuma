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
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg> */}
                            <MapPin/>
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