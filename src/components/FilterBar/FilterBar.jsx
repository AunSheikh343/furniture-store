import styles from "./FilterBar.module.css";

import SearchBox from "../SeaarchBox/SearchBox";
import SortDropdown from "../SortDropdown/SortDropdown";

function FilterBar({
  search,
  setSearch,
  sort,
  setSort,
}) {
  return (
    <div className={styles.bar}>

      <div>
        <button>☰ Filter</button>
        <span>Showing 1–12 of 32 results</span>
      </div>

      <div className={styles.right}>

        <SearchBox
          value={search}
          onChange={setSearch}
        />

        <SortDropdown
          value={sort}
          onChange={setSort}
        />

      </div>

    </div>
  );
}

export default FilterBar;