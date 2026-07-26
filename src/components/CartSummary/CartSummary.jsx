import { Link } from "react-router-dom";
import styles from "./CartSummary.module.css";

function CartSummary({ total }) {
  return (
    <div className={styles.summary}>

      <h2>Cart Summary</h2>

      <div>

        <span>Subtotal</span>

        <span>${total.toFixed(2)}</span>

      </div>

      <div>

        <span>Shipping</span>

        <span>FREE</span>

      </div>

      <div>

        <span>Tax</span>

        <span>$0.00</span>

      </div>

      <hr />

      <div className={styles.total}>

        <span>Total</span>

        <span>${total.toFixed(2)}</span>

      </div>

     <Link to="/checkout">
    <button>
        Proceed To Checkout
    </button>
</Link>

    </div>
  );
}

export default CartSummary;