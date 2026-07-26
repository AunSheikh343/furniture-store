import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/useCart";

import {
    FiMenu,
    FiX,
    FiSearch,
    FiHeart,
    FiShoppingCart,
    FiUser
} from "react-icons/fi";

import styles from "./Navbar.module.css";

function Navbar() {
    const { cart } = useCart();
    const itemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
);

    const [open, setOpen] = useState(false);

    return (

        <header className={styles.header}>

            <div className="container">

                <nav className={styles.nav}>

                    <div className={styles.logo}>
                        FurniLux
                    </div>

                    <ul className={`${styles.menu} ${open ? styles.active : ""}`}>

                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/shop">Shop</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>

                    </ul>

                    <div className={styles.icons}>

                        <FiSearch />

                        <FiHeart />

                        <NavLink to="/cart" className={styles.cartIcon} aria-label="View cart">
                            <FiShoppingCart />
                            <span className={styles.badge}>{itemCount}</span>
                        </NavLink>

                        <FiUser />

                    </div>

                    <button
                        className={styles.mobileBtn}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>

                </nav>

            </div>

        </header>

    );
}

export default Navbar;