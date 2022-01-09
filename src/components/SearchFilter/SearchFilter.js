import React from "react";

const SearchFilter = ({ filterFunction, type }) => {
  return (
    // <input
    //   className={styles.input}
    //   placeholder={`Search by ${type}`}
    //   onChange={e => {
    //     filterFunction(e.target.value.toLowerCase().trim());
    //   }}
    // />
    <input
      className="app_input"
      label="Filter Students: "
      //   placeholder="Search by name"
      placeholder={`Search by ${type}`}
      onChange={(e) => {
        filterFunction(e.target.value.toLowerCase().trim());
      }}
      //   onChange={this.handleSearch}
    />
  );
};
export default SearchFilter;
