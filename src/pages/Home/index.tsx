import HeroBanner from './components/HeroBanner';
import FeaturedCategories from './components/FeaturedCategories/index';
import FeaturedCollections from './components/FeaturedCollections';
import Bestsellers from './components/Bestsellers/index';
import Philosophy from './components/Philosophy';
import VisitUs from './components/VisitUs';
import Advantages from '../../components/common/Advantages';
import Newsletter from '../../components/common/Newsletter';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <FeaturedCategories />
      <FeaturedCollections />
      <Bestsellers />
      <Philosophy />
      <VisitUs />
      <Advantages />
      <Newsletter />
    </>
  );
};

export default Home;
