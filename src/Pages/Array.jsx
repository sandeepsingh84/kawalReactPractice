import React, { useState } from "react";

const Array = () => {
  // creating an array

  //   const colorArray = [];
  //   colorArray[0] = "red";
  //   colorArray[1] = "blue";
  //   colorArray[3] = "green";
  //   console.log("colorArray", colorArray);

  //accessing an array

  //   const colorArray = ["red", "blue", "green", "yellow"];
  //   let returnyellowClr = colorArray[3];
  //   console.log("returnyellowClr", returnyellowClr);

  //changing an array element

  //   const colorArray = ["red", "blue", "green", "yellow"];
  //   colorArray[0] = "pink";
  //   console.log("color", colorArray);

  //popping and pushing an array element

  //   const fruitsArray = ["apple", "banana", "papaya", "grapes"];
  //   fruitsArray.pop();
  //   fruitsArray.push("orange");
  //   console.log("fruitsArray", fruitsArray);

  //   shifting and unshifting an array element

  //   const fruitArray = ["apple", "banana", "papaya", "orange"];
  //   fruitArray.shift();
  //   fruitArray.unshift("kiwi");
  //   console.log("fruitArray", fruitArray);

  //changing element

  //   const fruitArray = ["apple", "banana", "orange"];
  //   fruitArray[2] = "kiwi";
  //   console.log("fruitArray", fruitArray);

  //array length

  //   const fruitArray = ["apple", "banana", "orange"];
  //   const result = (fruitArray[fruitArray.length] = "banana");
  //   console.log("result", result);

  //delete array

  //   const fruitArray = ["apple", "banana", "orange"];
  //   delete fruitArray[0];
  //   console.log("first", fruitArray);

  //merging an array
  //   const color1 = ["red", "green", "yellow", "blue"];
  //   const color2 = ["brown", "pink", "black", "grey"];
  //   const color3 = ["skyBlue", "orange", "purple"];
  //   const totalColor = color1.concat(color2, color3);
  //   console.log("totalColor", totalColor);

  //merging an array with value

  //   const color1 = ["red", "green", "yellow", "blue"];
  //   const color5 = color1.concat("black");
  //   console.log("color5", color5);

  //sort array
  const points = [40, 100, 1, 5, 25, 10];
  const [isAscending, setIsAscending] = useState(false);
  const [ascending, setAscending] = useState([]);
  function myFunction1() {
    let result = points.sort(function (a, b) {
      return a - b;
    });
    let resut = "";

    for (let i = 0; i < result.length; i++) {
      resut = resut + " , " + result[i];
      //   console.log("resut", resut);
    }
    setAscending(resut);
    // console.log("result", result);
  }

  return (
    <div>
      <button
        onClick={() => {
          myFunction1();
          setIsAscending(true);
        }}
      >
        click
      </button>
      {isAscending === true ? <p>{ascending}</p> : ""}
    </div>
  );
};

export default Array;
