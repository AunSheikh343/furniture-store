import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./RelatedProducts.module.css";

function RelatedProducts({ currentId }) {
  const relatedItems = products
    .filter((item) => item.id !== currentId)
    .slice(0, 4);

  return (
    <section className={styles.related}>
      <div className="container">
        <h2 className={styles.title}>Related Products</h2>
        <div className={styles.grid}>
          {relatedItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
