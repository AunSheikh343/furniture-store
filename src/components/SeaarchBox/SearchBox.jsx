import styles from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search furniture..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBox;