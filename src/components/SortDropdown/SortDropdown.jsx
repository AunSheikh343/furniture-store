import styles from "./SortDropdown.module.css";

function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      className={styles.select}
    >
      <option value="default">Default</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
      <option value="name">A → Z</option>
    </select>
  );
}

export default SortDropdown;