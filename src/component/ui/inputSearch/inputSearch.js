import React, { useState } from 'react';
import styles from "./inputSearch.module.css"

const InputSearch = ({ data, onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filteredData = data.filter(user =>
      user.username.toLowerCase().includes(value.toLowerCase()) ||
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredData);
  };

  return (
    <div className={styles.inputSearchWrapper}>
        <div className={styles.iconInputSearch}>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
        type="text"
        placeholder="Search"
          className={styles.inputSearch}
          value={search}
          onChange={handleSearch}
        />
    </div>
  );
};

export default InputSearch;
