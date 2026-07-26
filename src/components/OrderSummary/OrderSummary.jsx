import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/useCart";

import styles from "./OrderSummary.module.css";

function OrderSummary(){
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    clearCart();
    toast.success("Order placed successfully!");
    navigate("/order-success");
  };

return(

<div className={styles.summary}>

<h2>Your Order</h2>

{cart.map(item=>(

<div
key={item.id}
className={styles.item}
>

<span>

{item.name}

× {item.quantity}

</span>

<span>

${(item.price*item.quantity).toFixed(2)}

</span>

</div>

))}

<hr/>

<div className={styles.item}>

<span>Subtotal</span>

<span>

${total.toFixed(2)}

</span>

</div>

<div className={styles.item}>

<span>Shipping</span>

<span>FREE</span>

</div>

<div className={styles.item}>

<strong>Total</strong>

<strong>

${total.toFixed(2)}

</strong>

</div>

<h3>Payment Method</h3>

<label>

<input
type="radio"
name="payment"
defaultChecked
/>

Cash On Delivery

</label>

<label>

<input
type="radio"
name="payment"
/>

Credit Card

</label>

<label>

<input
type="radio"
name="payment"
/>

Bank Transfer

</label>

<button type="button" onClick={handlePlaceOrder}>

Place Order

</button>

</div>

)

}

export default OrderSummary;