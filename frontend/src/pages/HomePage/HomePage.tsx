import AboutOwner from '../../components/AboutOwner';
import AboutUs from '../../components/AboutUs';
import AboutWine from '../../components/AboutWine';
import Branch from '../../components/Branch';
import Hero from '../../components/Hero';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <AboutUs />
      <Branch />
      <AboutWine />
      <AboutOwner />
    </div>
  );
};

export default HomePage;
