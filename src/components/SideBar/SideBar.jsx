import styles from "./Sidebar.module.css";

function Sidebar() {

    return (

        <aside className={styles.sidebar}>

            <h3>Categories</h3>

            <ul>

                <li>Living Room</li>

                <li>Bedroom</li>

                <li>Dining</li>

                <li>Office</li>

            </ul>

            <h3>Price</h3>

            <input type="range" />

            <h3>Colors</h3>

            <div className={styles.colors}>

                <span className={styles.black}></span>

                <span className={styles.gray}></span>

                <span className={styles.beige}></span>

            </div>

        </aside>

    );

}

export default Sidebar;