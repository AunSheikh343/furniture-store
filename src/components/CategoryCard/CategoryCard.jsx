import styles from "./CategoryCard.module.css";

function CategoryCard({ title, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
    </div>
  );
}

export default CategoryCard;