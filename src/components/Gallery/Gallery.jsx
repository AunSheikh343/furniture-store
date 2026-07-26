import styles from "./Gallery.module.css";
import gallery from "../../data/gallery";

function Gallery() {
  return (
    <section className={styles.section}>
      <div className="container">

        <p className={styles.small}>
          Share your setup with
        </p>

        <h2>#FurniLux</h2>

        <div className={styles.grid}>

          {gallery.map((item) => (

            <div
              key={item.id}
              className={styles.card}
            >

              <img
                src={item.image}
                alt=""
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;