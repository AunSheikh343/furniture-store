import { useMemo, useState } from "react";

import ShopBanner from "../../ShopBanner/ShopBanner";
import FilterBar from "../../FilterBar/FilterBar";
import Sidebar from "../../SideBar/SideBar";
import ProductGrid from "../../ProductGrid/ProductGrid";
import Pagination from "../../Pagination/Pagination";

import products from "../../../data/products";

import styles from "./Shop.module.css";

function Shop() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search) {
      list = list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case "low":
        list.sort((a, b) => a.price - b.price);
        break;
      case "high":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return list;
  }, [search, sort]);

  return (
    <>
      <ShopBanner />

      <FilterBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />

      <section className={styles.shop}>
        <div className="container">

          <div className={styles.layout}>
            <Sidebar />
            <ProductGrid products={filteredProducts} />
          </div>

          <Pagination />

        </div>
      </section>
    </>
  );
}

export default Shop;