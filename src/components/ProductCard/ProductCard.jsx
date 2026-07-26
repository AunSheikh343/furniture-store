import styles from "./ProductCard.module.css";
import { useCart } from "../../context/useCart";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import {
  FiHeart,
  
  FiShare2,
  FiGitMerge,
} from "react-icons/fi";


function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addWishlist } = useWishlist();

  return (
    <div className={styles.card}>

      <div className={styles.imageContainer}>

        <img src={product.image} alt={product.name} />

        {product.badge && (
          <span
            className={`${styles.badge} ${
              product.badgeType === "new"
                ? styles.new
                : styles.sale
            }`}
          >
            {product.badge}
          </span>
          
        )}

        <div className={styles.overlay}>

        <button
          type="button"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

         <div className={styles.actions}>

    <span>
        <FiShare2 /> Share
    </span>

    <span>
        <FiGitMerge /> Compar
      e
    </span>

    <span
        onClick={() => addWishlist(product)}
        style={{ cursor: "pointer" }}
    >
        <FiHeart /> Like
    </span>

</div>

        </div>

      </div>

      <div className={styles.info}>
        <div className={styles.imageContainer}>

    <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
    </Link>

    ...
</div>
<Link
    to={`/product/${product.id}`}
    className={styles.title}
>
    <h3>{product.name}</h3>
</Link>


        <p>{product.category}</p>

        <div className={styles.price}>

          <span>{product.price}</span>

          {product.oldPrice && (
            <del>{product.oldPrice}</del>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;