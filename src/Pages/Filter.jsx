import React from "react";

const Filter = () => {
  const array = [{ name: "Shubham" }, { name: "kwaljit" }];
  const filterName = () => {
    return array?.filter((data) => console.log("data", data));
  };
  console.log("filterName", filterName);
  return <div>Filter</div>;
};

export default Filter;
