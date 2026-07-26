import CheckoutForm from "../../CheckoutForm/CheckoutForm";
import OrderSummary from "../../OrderSummary/OrderSummary";

import styles from "./Checkout.module.css";

function Checkout() {

    return (

        <section className={styles.checkout}>

            <div className="container">

                <h1>Checkout</h1>

                <div className={styles.layout}>

                    <CheckoutForm />

                    <OrderSummary />

                </div>

            </div>

        </section>

    );

}

export default Checkout;