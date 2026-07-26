import { motion } from "framer-motion";

import CategoryCard from "../CategoryCard/CategoryCard";
import categories from "../../data/categories";

import styles from "./CategoriesSection.module.css";

function CategoriesSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Browse The Range</h2>

          <p>
            Discover furniture designed to elevate every room in your home.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoriesSection;