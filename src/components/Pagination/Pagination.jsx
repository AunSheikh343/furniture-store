import styles from "./Pagination.module.css";

function Pagination() {

    return (

        <div className={styles.pagination}>

            <button>1</button>

            <button>2</button>

            <button>3</button>

            <button>Next</button>

        </div>

    );

}

export default Pagination;