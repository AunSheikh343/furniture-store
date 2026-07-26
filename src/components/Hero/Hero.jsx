import { motion } from "framer-motion";
import styles from "./Hero.module.css";

import heroImage from "../../assets/hero/hero.jpg";

function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container">

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className={styles.subtitle}>
            New Arrival
          </span>

          <h1>
            Discover Our <br />
            New Collection
          </h1>

          <p>
            Discover beautifully crafted furniture that combines
            elegance, comfort and functionality to transform your
            living space into something extraordinary.
          </p>

          <button>
            Shop Now
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;