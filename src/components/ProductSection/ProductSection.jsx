import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductSection.module.css";

function ProductsSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        <h2>Our Products</h2>

        <div className={styles.grid}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>

        <button className={styles.showMore}>
          Show More
        </button>

      </div>
    </section>
  );
}

export default ProductsSection;