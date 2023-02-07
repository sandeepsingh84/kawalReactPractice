import React, { useState } from "react";

function JsPractice() {
  const [isFirst, setIsFirst] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [isParaVisible, setIsParaVisible] = useState(false);
  const [isTimeShow, setIsTimeShow] = useState(false);
  const [isnewTexttShow, setIsNewTexttShow] = useState(false);
  const [isMgVisible, setIsMgVisible] = useState(false);
  console.log("isMgVisible", isMgVisible);
  // console.log("isTimeShow", isTimeShow);
  const light = () => {
    if (isOn === false) {
      return "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
      return "https://www.w3schools.com/js/pic_bulbon.gif";
    }
  };
  const changeText = () => {
    if (isFirst === false) {
      return "hello india";
    } else {
      return "hello world";
    }
  };
  let x = 800;
  let y = 200;
  let z = x + y;
  //   const addTwoNumbers = () => {
  //     return (z = x + y);
  //   };

  const returnParagraph = () => {
    return (
      <p>
        hello <br />
        india
      </p>
    );
  };

  let s;
  s = 1000000;

  let g = 6;
  let m = 6;
  let v = 100;
  let t = ((g + m) * v) / g;
  //   console.log("t", t);
  let r = 10;
  let w = r * 89;
  //   console.log("w", w);

  let name = "Kawaldeep kaur";
  let city = "Amritsar";
  let country = "INDIA";
  let information = name + ", " + city + ", " + country;
  //   console.log("information", information);

  let d = 6;
  let c = d * 4;
  //   console.log("c", c);

  const car = ["volvo", "saab", "BMW"];
  // replace item  in array
  let length = car.length;
  // console.log("length", length);
  car[1] = "toyota";
  //add new item in array at the end of the array
  car.push("saab");
  //   console.log("car", car);
  const arrayObject = {
    name: "kawal",
    city: "amritsar",
    country: "India",
  };

  //change name value in an object
  //first method
  // arrayObject.name = "aman";
  //second method
  arrayObject["name"] = "kk";
  //add new key in an object
  arrayObject.color = "pink";

  // console.log("arrayObject", arrayObject);
  let text1 = "what a very";
  text1 += " a nice day";
  // console.log("text1", text1);
  let aa = 5;
  let bb = "4" + 8;
  // console.log("bb", bb);
  let cc = "hello" + "4";
  // console.log("cc", cc);

  //increment and decrement value
  let dd = 90;
  dd--;
  let yy = dd;
  // console.log("yy", yy);

  let ee = 9;
  let ff = ee ** 2;
  // console.log("ff", ff);
  let gg = 11;
  let hh = Math.pow(gg, 3);
  // console.log("hh", hh);
  let ll = "gygy uhyy ugyg 'uhu8y'";
  let oo = "'hhuh' uuhuh uhuh huhu";
  let rr = ll + "" + oo;
  // console.log("rr", rr);

  let kk = 5;
  let kl = 7;
  let ss = 5;
  let igy = ss == kk;
  // console.log("igy", igy);
  const tyu = {
    name: "kk",
    color: "red",
    class: "ygu",
    city: "uhu",
  };
  let result = tyu.name + " " + "likes " + tyu.color + " color";
  // console.log("result", result);
  const qwe = ["kawal", "hbjb", "red", "uihib"];
  let results = qwe[0] + " likes" + " " + qwe[2] + " color";
  // console.log("results", results);

  var fgh = gjvjvjv(7, 8);
  // console.log("fgh", fgh);
  function gjvjvjv(a, b) {
    return a + b;
  }
  function toCelsius(f) {
    return (5 / 9) * (f - 32);
  }
  let xr = toCelsius(77);
  // console.log("xr", xr);
  let text = "The temperature is " + x + " Celsius";
  // console.log("text", text);
  function ibbbjj() {
    let car = "bmw";
    return car;
  }
  // const person = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   id: 5566,
  // };

  // const fullName = () => {
  //   return this.firstName + " " + this.lastName;
  // };
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  // console.log("person", person?.fullName());
  let xxxx = new String("John");
  let yyyy = new String("John");
  let zzzz = xxxx === yyyy;
  // console.log("zzzz", zzzz);
  let xx = new String("John");
  // console.log("xx", xx);
  let yyyyyy = new String("John");
  // console.log("yyyyyy", yyyyyy);

  let str = "Apple, Banana, Kiwi, grapes";
  let part = str.substr(14, 4);
  // console.log("part", part);
  let textt = "Please visit Microsoft!";
  let newTextt = textt.replace("Microsoft", "W3Schools");
  // console.log("newText", newTextt);
  const [replaced, setReplaced] = useState(
    "this is my book and my copy my flaan my dheeng"
  );
  // let msg = "this is my book and my copy";
  // let newResult = msg.split(" ");
  // console.log("newResult", newResult);
  const ChangeTexts = () => {
    // if (isMgVisible === false) {
    // let msg = document.getElementById("newdata").innerHTML;
    let msg = replaced;

    let newResult = msg.split(" ");
    const index = newResult.findIndex((item) => item === "my");

    newResult.splice(index, 1, "your");

    console.log("newResult", newResult);

    let combinedString = "";

    newResult?.map((items) => {
      combinedString = combinedString + " " + items;
    });

    // console.log("combinedString", combinedString);
    setReplaced(combinedString);

    // let result = msg.includes("my");

    // if (result === true) {
    //   msg = "this is your book and my copy";
    // }
    // setReplaced(msg);
    // } else if (isMgVisible === true) {
    // let msg = "this is my book and my copy";
    // msg = msg.replace("my", "your");
    // return msg;
    // }
  };
  return (
    <div>
      {ibbbjj()}
      {toCelsius(7)}
      <br />
      <div></div>
      {/* {qwe[0]} */}
      {/* change text  */}
      <button
        onClick={() => {
          changeText();
          setIsFirst(!isFirst);
        }}
      >
        change text
      </button>
      <p style={{ color: isFirst === false ? "red" : "blue" }}>{isFirst}</p>
      {/* //light on / off */}

      <img
        src={light()}
        onClick={() => {
          alert("On/Off");
          setIsOn(!isOn);
        }}
        alt="j"
      />
      {/* result of add numbers */}
      <p>z={z}</p>

      {/* to show paragraph on click  */}
      <button onClick={() => setIsParaVisible(true)}>click</button>
      {isParaVisible ? returnParagraph() : ""}

      {/* to show variable */}
      <p>{s}</p>
      {/* to show number by using arithmetic operators */}
      <p>{t}</p>

      <button
        onMouseOver={() => {
          setIsTimeShow(!isTimeShow);
        }}
      >
        show time
      </button>
      {isTimeShow === true ? Date() : ""}

      {Date}

      <div>
        <button onClick={() => setIsNewTexttShow(true)}>replace text</button>
        {isnewTexttShow === false ? <p>{textt}</p> : <p>{newTextt}</p>}
      </div>
      <div>
        <button
          onClick={() => {
            // setIsMgVisible(true);
            ChangeTexts();
          }}
        >
          show
        </button>
        {/* {isMgVisible === false ? <p>{msg}</p> : <p>{newMg}</p>} */}
        <p id="newdata">{replaced}</p>
      </div>
    </div>
  );
}

export default JsPractice;
