import React, { useEffect } from "react";

const SortArray = () => {
  const array = ["papaya", "orange", "banana", "grapes", "apple"];
  //   array sort
  const result = array.sort();
  //   console.log("result", result);
  //   array sort in reverse order
  array.reverse();
  //   console.log("result of reverse array", array);

  const numbers = [45, 86, 20, 100, 20, 567];

  //   number in ascending order
  numbers.sort(function (a, b) {
    return a - b;
  });
  //   console.log(numbers);

  // number in descending order
  const digits = [5, 8, 0, 1, 2, 7];
  digits.sort(function (a, b) {
    return b - a;
  });
  //   console.log(digits);

  // arrays of objects can be sorted by comparing values of one of their properties
  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  items.sort(function (a, b) {
    return a.value - b.value;
  });

  //   console.log(items);

  const points = [40, 100, 10, 5, 25, 10];

  // Sort the numbers in ascending order and find lowest value
  points.sort(function (a, b) {
    return a - b;
  });

  let lowest = points[0];
  //   console.log(lowest);
  const data = [
    { title: "One", value: 100 },
    { title: "Two", value: 200 },
    { title: "Three", value: 300 },
  ];

  // console.log(data.reduce((a, v) => (a = a + v.value), 0));

  let point = [40, 100, 60, 20, 80];

  let sum = 0;

  for (let num of point) {
    sum += num;
  }

  // console.log(sum);

  let kwl = ["this", "my", "laptop", "is"];
  let sdf = ["ghh", "ugj", "yyy", "iii"];
  // console.log("kwl", kwl);
  // let joine = kwl.join();
  // console.log("joine", joine);
  let fgh = kwl.concat(sdf);
  // console.log("fgh", fgh);

  const book = {
    genre: "Popular Science",
    name: "Our Mathematical Universe",
    author: "Max Tegmark",
  };
  const arr = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  arr.sort(function (a, b) {
    return a.name - b.name;
  });
  // console.log("arr", arr);
  let csvString = arr?.map((field) => field.name).join();
  // console.log("res", csvString);

  // useeffect to check component life cycle
  // useEffect(() => {
  //   console.log("mount");

  //   console.log("update");
  //   //return function of useeffect fires when component will unmount
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  let platonicSolids = [
    "Tetrahedron",
    "Cube",
    "Octahedron",
    "Dodecahedron",
    "Icosahedron",
  ];
  let result2 = "";

  for (let i = 0; i < platonicSolids.length; i++) {
    result2 = result.concat(platonicSolids[i]);
  }
  // console.log("result2", result2);

  // concat array

  let platcSolids = [
    "Tetrahedron",
    "Cube",
    "Octahedron",
    "Dodecahedron",
    "Icosahedron",
  ];
  let resut = "";

  for (let i = 0; i < platcSolids.length; i++) {
    resut = resut + "  " + platcSolids[i];
  }

  // console.log(resut);

  const arjdcjegr = [
    { name: "my", value: 21 },
    { name: "book", value: 37 },
    { name: "copy", value: 45 },
    { name: "This", value: -12 },
    { name: "is", value: 13 },
    { name: "and", value: 37 },
  ];
  arjdcjegr.sort(function (a, b) {
    return a.value - b.value;
  });
  const kk = arjdcjegr?.map((ite) => ite?.name);
  // console.log("kk", kk);
  let res = "";
  for (let i = 0; i < kk.length; i++) {
    res = res + "  " + kk[i];
  }
  // console.log("res", res);
  return <div>SortArray</div>;
};

export default SortArray;
