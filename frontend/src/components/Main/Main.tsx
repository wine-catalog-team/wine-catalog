import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
// Pages
import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductPage from '../../pages/ProductPage';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default Main;
