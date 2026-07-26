import Hero from "../../Hero/Hero";
import CategoriesSection from "../../CategoriesSection/CategoriesSection";
import ProductSection from "../../ProductSection/ProductSection";
import Inspiration from "../../Inspiration/Inspiration";
import Gallery from "../../Gallery/Gallery";
import Features from "../../Features/Features";

function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <ProductSection />
      <Inspiration />
      <Gallery />
      <Features />
    </>
  );
}

export default Home;