import React, { useEffect } from "react";

const Practice = () => {
  useEffect(() => {
    console.log("mount");
    console.log("update");

    return () => console.log("unmount");
  }, []);
  return <div>Practice</div>;
};

export default Practice;
