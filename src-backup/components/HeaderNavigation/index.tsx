import { Link } from "react-router-dom"
import { ROUTE } from "../../constants/route";
import "./styles.css"

const HeaderNavigation = () => {
  return (
    <div className="header-nav-container">
      <nav className="nav-items-left">
        <ul>
          <li> <Link to={ROUTE.HOME} className="nav-item shopname">Amrit Gurbani</Link> </li>
          <li> <Link to={ROUTE.ALL_PRODUCTS} className="nav-item">All Products</Link> </li>
        </ul>
      </nav>
      <div className="nav-items-right">
        <i className="nav-item fas fa-cart-arrow-down"></i>
      </div>
    </div>
  );
};

export default HeaderNavigation;
