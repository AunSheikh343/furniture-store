import { useParams } from "react-router-dom";
import products from "../../../data/products";

import ProductGallery from "../../ProductGallery/ProductGallery";
import ProductInfo from "../../ProductInfo/ProductInfo";
import ProductTabs from "../../ProductTabs/ProductTabs";
import RelatedProducts from "../../RelatedProducts/RelatedProducts";

import styles from "./ProductDetails.module.css";

function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
        p => p.id === Number(id)
    );

    if (!product) {
        return <h2>Product not found.</h2>;
    }

    return (
        <>
            <section className={styles.top}>
                <div className="container">

                    <div className={styles.layout}>

                        <ProductGallery product={product} />

                        <ProductInfo product={product} />

                    </div>

                </div>
            </section>

            <ProductTabs product={product} />

            <RelatedProducts
                currentId={product.id}
            />

        </>
    );
}

export default ProductDetails;