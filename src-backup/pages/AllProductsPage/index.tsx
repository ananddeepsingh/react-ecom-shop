import { useSelector, RootStateOrAny } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { Product } from '../../store/reducers/productDetailsReducer';
import './styles.css'


const AllProductsPage = () => {
  const store = useSelector((state: RootStateOrAny) => state.productDetails);

  const renderProducts = () => {
    return store.products.map(({ id, variants, title }: Product) => {
      return (
        <div className="product-item-container" key={id}>
          <ProductCard url={variants[0].image} name={title} />
        </div>
      )
    })
  }

  return (
    <div className="product-page-wrapper">
      <h2> All Products Page</h2>
      <div className="all-products-page-container">
        {renderProducts()}
      </div>
    </div>
  );
};

export default AllProductsPage;
