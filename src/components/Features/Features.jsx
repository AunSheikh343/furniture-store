import styles from "./Features.module.css";

import {
  FiTruck,
  FiShield,
  FiCreditCard,
  FiHeadphones,
} from "react-icons/fi";

import { motion } from "framer-motion";

const features = [
  {
    icon: <FiTruck />,
    title: "Free Delivery",
    text: "Free shipping on all orders over $100.",
  },
  {
    icon: <FiShield />,
    title: "Premium Quality",
    text: "Furniture crafted from high-quality materials.",
  },
  {
    icon: <FiCreditCard />,
    title: "Secure Payment",
    text: "Multiple payment methods with 100% security.",
  },
  {
    icon: <FiHeadphones />,
    title: "24/7 Support",
    text: "Friendly customer support whenever you need us.",
  },
];

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">

        <div className={styles.heading}>
          <h2>Why Choose FurniLux</h2>

          <p>
            Premium furniture designed to elevate your everyday
            living experience.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;