import ShopQuality from '../../components/ShopQuality'
import BestSeller from '../BestSeller';
import './styles.css'

const HomePage = () => {
  return (
    <div className="hompage-container">
      <div className="cover-image" />
      <ShopQuality />
      <BestSeller />
    </div>
  );
};

export default HomePage;
