import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Pages/Cart/Cart";

import Layout from "./components/layout/layout";

import Home from "./components/Pages/Home/Home";
import Shop from "./components/Pages/Shop/Shop";
import About from "./components/Pages/About/About";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact/Contact";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import Checkout from "./components/Pages/Checkout/Checkout";
import OrderSuccess from "./components/Pages/OrderSuccess/OrderSuccess";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<Layout />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/shop" element={<Shop />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/blog" element={<Blog />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/product/:id" element={<ProductDetails />} />

                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;