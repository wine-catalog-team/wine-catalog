import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <article className={styles.product}>
      <h1>ProductPage</h1>
      <p>Product ID: {id}</p>
    </article>
  );
};

export default ProductPage;
