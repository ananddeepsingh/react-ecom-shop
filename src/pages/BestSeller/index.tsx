import ProductCard from "../../components/ProductCard"
import "./styles.css"
const BestSeller = () => {
  return (
    <div className="best-seller-container">
      <h3>Best Seller</h3>
      <div className="best-seller-products">
        <ProductCard
          name="Formal Dress Shirts Casual Long Sleeve Slim Fit"
          url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png"
        />
        <ProductCard
          name="Formal Dress Shirts Casual Short Sleeve Slim Fit"
          url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png"
        />
        <ProductCard
          name="Soft Summer Short Slim Fit"
          url="http://localhost:1234/public/images/Soft%20Summer%20Short%20Slim%20Fit%20-%20Gray.png"
        />
      </div>
    </div>
  );
};

export default BestSeller;
