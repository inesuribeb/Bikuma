import './ProductCard.css'

function ProductCard({img, title}) {
    return (
        <div className='product-card-container'>
            <div className='image-container'>
            <img src={img} alt={title} />
            </div>
            <h6>{title}</h6>
        </div>
    )
}

export default ProductCard;