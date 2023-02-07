import React from "react";
import useWindowsWidth from "../useWindowsWidth ";

const Mycomponent = () => {
  const onSmallScreen = useWindowsWidth();
  console.log("onSmallScreen", onSmallScreen);
  return (
    <div
      style={{
        backgroundColor: onSmallScreen ? "gray" : "cyan",
        color: onSmallScreen ? "red" : "yellow",
        width: onSmallScreen ? "100%" : "100%",
      }}
    >
      <form action="">
        <div
          style={{
            display: onSmallScreen ? "flex" : "flex",
            justifyContent: onSmallScreen ? "space-between" : "center",
            flexDirection: onSmallScreen ? "column" : "row",
            width: onSmallScreen ? "100%" : "100%",
          }}
        >
          <div>
            <label htmlFor="">username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">address </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">country</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">phone number</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mycomponent;
