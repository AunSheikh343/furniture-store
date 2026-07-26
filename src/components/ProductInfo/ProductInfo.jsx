import { useState } from "react";
import { useCart } from "../../context/useCart";

import styles from "./ProductInfo.module.css";

function ProductInfo({ product }) {

    const { addToCart } = useCart();

    const [qty, setQty] = useState(1);

    return (

        <div>

            <h1>{product.name}</h1>

            <h2>${product.price}</h2>

            <p>
                Beautiful handcrafted furniture designed
                for modern living.
            </p>

            <h4>Size</h4>

            <div className={styles.options}>
                <button>S</button>
                <button>M</button>
                <button>L</button>
            </div>

            <h4>Color</h4>

            <div className={styles.colors}>
                <span className={styles.black}></span>
                <span className={styles.gray}></span>
                <span className={styles.beige}></span>
            </div>

            <div className={styles.quantity}>

                <button
                    onClick={() =>
                        setQty(Math.max(1, qty - 1))
                    }
                >
                    -
                </button>

                <span>{qty}</span>

                <button
                    onClick={() =>
                        setQty(qty + 1)
                    }
                >
                    +
                </button>

            </div>

            <button
                className={styles.cart}
                onClick={() => {
                    for (let i = 0; i < qty; i++) {
                        addToCart(product);
                    }
                }}
            >
                Add To Cart
            </button>

        </div>

    );

}

export default ProductInfo;