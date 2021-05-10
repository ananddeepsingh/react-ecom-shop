import { IProductCard } from "./interface";
import './styles.css';

const ProductCard = ({ url, name }: IProductCard) => {
  return (
    <div className="product-card-container">
      <div style={{ background: `url(${url})` }} className="product-image" />
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
