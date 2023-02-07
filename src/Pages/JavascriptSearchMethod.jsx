import React from "react";

const JavascriptSearchMethod = () => {
  const str = "please locate where 'locate' occurs";
  const strOfFirstResult = str.indexOf("locate");
  const strOfLastResult = str.lastIndexOf("locate");
  let strr = "Please locate where 'locate' occurs!";
  const result = str.lastIndexOf("John");
  let x = 9.656;
  x.toFixed(0);
  x.toFixed(2);
  x.toFixed(4);
  let ews = x.toFixed(6);
  console.log("x", ews);
  return <div>JavascriptSearchMethod</div>;
};

export default JavascriptSearchMethod;
