import React, { useEffect, useState } from "react";
import Practice from "./Practice";
// const array = ["red", "blue", "black", "green", "yellow"];
// delete item frm array
// const result = array?.filter((item) => item !== "green");
// console.log("result", result);

// add items in array

const MapFilterFindPractice = () => {
  const [isVisible, setIsVisible] = useState(false);
  x = 5;
  var x;
  // console.log("x", x);

  //   const result = array.map((prev) => {
  //     return [...prev, "hiuhiuh"];
  //   });
  //   console.log("result", result);

  //   reduce pactical
  const number = [175, 50, 25];
  const result = number.reduce(function (total, num) {
    return total - num;
  });
  // console.log("result", result);
  return (
    <>
      <div>MapFilterFindPractice</div>
      <button onClick={() => setIsVisible(!isVisible)}>click</button>
      {isVisible ? <Practice /> : ""}
    </>
  );
};

export default MapFilterFindPractice;
