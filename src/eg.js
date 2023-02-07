console.log(2);
const filterName = (arr, str) => {
  return arr?.filter((data) => data.name === str);
};
console.log(filterName([{ name: "Shubham" }, { name: "kwaljit" }], "Shubham"));
