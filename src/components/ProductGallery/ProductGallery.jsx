import { useState } from "react";

import styles from "./ProductGallery.module.css";

function ProductGallery({ product }) {

    const [image, setImage] = useState(product.image);

    return (

        <div>

            <img
                src={image}
                alt={product.name}
                className={styles.main}
            />

            <div className={styles.thumbs}>

                {[1,2,3,4].map((item)=>(
                    <img
                        key={item}
                        src={product.image}
                        alt=""
                        onClick={() => setImage(product.image)}
                    />
                ))}

            </div>

        </div>

    );

}

export default ProductGallery;