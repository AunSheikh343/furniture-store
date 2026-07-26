import { Link } from "react-router-dom";
import styles from "./OrderSuccess.module.css";

function OrderSuccess() {
  return (
    <section className={styles.success}>
      <div className="container">
        <h1>Order Confirmed</h1>
        <p>Your order has been placed successfully. Thank you for shopping with us!</p>
        <Link to="/">Return Home</Link>
      </div>
    </section>
  );
}

export default OrderSuccess;
