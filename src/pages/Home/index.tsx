import HeroBanner from './components/HeroBanner';
import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import Advantages from './components/Advantages';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="container">
        <FeaturedCategories />
        <FeaturedCollections />
        <Bestsellers />
        <Philosophy />
      </div>
      <Advantages />
    </>
  );
};

export default Home;
