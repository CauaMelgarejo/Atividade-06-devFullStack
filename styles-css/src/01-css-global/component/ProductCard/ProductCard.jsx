import Button from '../Button/Button';
function ProductCard ({imgUrl, title, price, rating, tag}){
    return(
        <div className='productCard'>
            <img src={imgUrl} alt={title} className='cardImage '/>
            <p className='cardTitle'>{title}</p>
            <p className='cardPrice'>{price}</p>
            <div className='cardRating'>{rating}</div>
            <div className='cardTag'>{tag}</div>
            <Button>Clique aqui!</Button>
        </div>
        
    )
}