import React from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      className={styles.searchInput}
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Ara..."}
    />
  );
};

export default SearchBar;
