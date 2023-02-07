import React, { useEffect, useState } from "react";
import SortArray from "./SortArray";

const Heelo = ({ comp }) => {
  const [isComponentMount, setIsComponentMount] = useState(false);
  // useEffect(() => {
  //   console.log("first");
  //   console.log("(update)");
  //   return () => {
  //     //   if (!comp) {
  //     console.log("umnount");
  //     //   }
  //   };
  // }, []);
  return (
    <>
      <div>Heelo</div>
      <button onClick={() => setIsComponentMount(!isComponentMount)}>
        click
      </button>
      {isComponentMount ? <SortArray /> : ""}
    </>
  );
};

export default Heelo;
