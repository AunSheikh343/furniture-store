import { useCart } from "../../../context/useCart";

import CartItem from "../../CartItem/CartItem";
import CartSummary from "../../CartSummary/CartSummary";

import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

function Cart() {

    const {

        cart,

        total,

        increaseQuantity,

        decreaseQuantity,

        removeItem

    } = useCart();

    return (

        <section className={styles.cart}>

            <div className="container">

                <h1>Shopping Cart</h1>

                {cart.length===0 ? (

                    <p>Your cart is empty.</p>

                ) : (

                    <div className={styles.layout}>

                        <div>

                            {cart.map(item=>(

                                <CartItem

                                    key={item.id}

                                    item={item}

                                    increaseQuantity={increaseQuantity}

                                    decreaseQuantity={decreaseQuantity}

                                    removeItem={removeItem}

                                />

                            ))}

                        </div>

                        <CartSummary total={total}/>

                    </div>

                )}

            </div>

        </section>

    );

}

export default Cart;