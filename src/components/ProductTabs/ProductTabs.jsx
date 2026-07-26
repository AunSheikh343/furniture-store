import { useState } from "react";
import styles from "./ProductTabs.module.css";

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className={styles.tabs}>
      <div className={styles.controls}>
        <button
          type="button"
          className={activeTab === "description" ? styles.active : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          type="button"
          className={activeTab === "details" ? styles.active : ""}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          type="button"
          className={activeTab === "reviews" ? styles.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === "description" && (
          <div>
            <p>
              {product.description ||
                `The ${product.name} is a beautifully designed ${product.category} that fits any modern interior.`}
            </p>
          </div>
        )}

        {activeTab === "details" && (
          <ul>
            <li>
              <strong>Product ID:</strong> {product.id}
            </li>
            <li>
              <strong>Category:</strong> {product.category}
            </li>
            <li>
              <strong>Price:</strong> ${product.price}
            </li>
            {product.oldPrice && (
              <li>
                <strong>Old Price:</strong> ${product.oldPrice}
              </li>
            )}
          </ul>
        )}

        {activeTab === "reviews" && (
          <div>
            <p>No reviews yet, but this product is highly rated by our customers.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductTabs;
