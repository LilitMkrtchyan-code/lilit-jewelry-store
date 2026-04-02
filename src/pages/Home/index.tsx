import HeroBanner from './components/HeroBanner';
import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import Advantages from '../../components/common/Advantages';
import VisitUs from './components/VisitUs';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="container">
        <FeaturedCategories />
        <FeaturedCollections />
        <Bestsellers />
        <Philosophy />
        <VisitUs />
      </div>
      <Advantages />
    </>
  );
};

export default Home;
