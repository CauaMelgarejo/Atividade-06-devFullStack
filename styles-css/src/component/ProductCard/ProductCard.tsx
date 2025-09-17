import Button from '../Button/Button';

type ProductProps = {
    imageUrl: string;
    title:string;
    price:string;
    rating:number;
    tag:string | null;
}
function ProductCard ({imageUrl, title, price, rating, tag}:ProductProps){
    return(
        <div className='productCard'>
            <img src={imageUrl} alt={title} className='cardImage '/>
            <p className='cardTitle'>{title}</p>
            <p className='cardPrice'>{price}</p>
            <div className='cardRating'>★ {rating}</div>
            {tag && <div className='cardTag'>{tag}</div>}
            <Button>Clique aqui!</Button>
        </div>
        
    );
}
export default ProductCard;