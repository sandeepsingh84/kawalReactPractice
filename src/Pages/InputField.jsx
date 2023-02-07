import React, { useState, useRef, useEffect } from "react";

const InputField = () => {
  const count = useRef(null);
  const onClickHandler = () => {
    count.current.value = count.current.value += 13;
    console.log("count.current.value", count.current.value);
    count.current.focus();
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <input
        style={{ border: "1px solid red" }}
        type="text"
        id=""
        ref={count}
      />
    </>
  );
};

//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
//   console.log("count", count);
//   useEffect(() => {
//     count.current.value = count.current.vlaue + 1;
//     console.log("count.current", count.current);
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {
//           console.log("e", e);
//           setInputValue(e.target.value);
//         }}
//       />
//       <h1 ref={count}>Render Count: {count.current.value}</h1>
//     </>
//   );
// };
export default InputField;
