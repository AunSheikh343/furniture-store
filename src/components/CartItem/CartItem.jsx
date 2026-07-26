import styles from "./CartItem.module.css";

function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className={styles.item}>

      <div className={styles.product}>

        <img
          src={item.image}
          alt={item.name}
        />

        <div>

          <h3>{item.name}</h3>

          <p>{item.category}</p>

        </div>

      </div>

      <p>${item.price}</p>

      <div className={styles.quantity}>

        <button
          onClick={() => decreaseQuantity(item.id)}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQuantity(item.id)}
        >
          +
        </button>

      </div>

      <p>
        ${(item.price * item.quantity).toFixed(2)}
      </p>

      <button
        className={styles.remove}
        onClick={() => removeItem(item.id)}
      >
        ✕
      </button>

    </div>
  );
}

export default CartItem;