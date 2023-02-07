import React, { useState, useEffect } from "react";
import axios from "axios";
// import Heelo from "./Pages/Heelo";
// import ControlVsUncontrol from "./Pages/ControlVsUncontrol";
// import SortArray from "./Pages/SortArray";
// import MapFilterFindPractice from "./Pages/MapFilterFindPractice";
import ControlledComponent from "./Pages/ControlledComponent";
// import Filter from "./Pages/Filter";
// import JsPractice from "./Pages/JsPractice";
// import SeconsJsPracticeSheet from "./Pages/SeconsJsPracticeSheet";
// import JavascriptSearchMethod from "./Pages/JavascriptSearchMethod";
import Array from "./Pages/Array";
import FrontLoginPage from "./Pages/FrontLoginPage";
import LogInFormJustPractice from "./Pages/LogInFormJustPractice";
import FormJustPractice from "./Pages/FormJustPractice";
import Form from "./Pages/Form";
import Mycomponent from "./Pages/Mycomponent";
import InputField from "./Pages/InputField";
import Input from "./Pages/Input";
import PdfViewer from "./Pages/PdfViewer.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comp, setCom] = useState(false);
  // console.log("posts", posts);
  // useEffect(() => {
  // const loadPost = async () => {
  //{ Till the data is fetch using API
  // the Loading page will show.}
  // setLoading(true);

  // {Await make wait until that
  // promise settles and return its result}
  // const response = await axios.get(
  // "https://jsonplaceholder.typicode.com/posts/"
  // );

  //{ After fetching data stored it in posts state.}
  // setPosts(response.data);

  // {Closed the loading page}
  // setLoading(false);
  // };

  // {Call the function}
  // loadPost();
  // }, []);

  const cmp1 = () => {
    return <p>heelo</p>;
  };

  const cmp2 = () => {
    return <div className="">khattammm</div>;
  };
  const data = {
    name: "hello",
    type: "car",
    model: "1999",
  };
  data.kuchv = "koyi";
  const arrayNew = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const [first, setfirst] = useState(arrayNew);
  // console.log("array", arrayNew);
  useEffect(() => {
    const Practice = async () => {
      setLoading(true);
      const getData = await axios.get("https://reqres.in/api/users");
      setPosts(getData?.data?.data);
      setLoading(false);
    };
    Practice();
  }, []);

  const obj = { a: "sandeep", b: "kawal", c: "vansh" };

  //For in loop example
  for (const key in obj) {
    // console.log(`${key} --> ${obj[key]}`);
  }

  //For of loop example
  const array1 = ["a", "b", "c"];

  for (const element of array1) {
    // console.log(element);
  }

  return (
    <>
      {/* {comp ? <Heelo comp={comp} /> : ""}

      <button
        onClick={() => {
          const newv = first;
          newv?.push({ id: 4 });
          console.log("click", arrayNew);
          setfirst([...newv]);
        }}
      >
        add element
      </button>

      <div>
        {Object?.keys(data)?.map((element) => (
          <h1>{data[element]}</h1>
        ))}
      </div>
      <div>
        {first?.map((element) => (
          <>{element?.id}</>
        ))}
      </div> */}
      {/* <div>
        {loading ? (
          <div>Loading.....</div>
        ) : (
          posts?.map((item) => <div>{item?.first_name}</div>)
        )}
      </div> */}
      {/* <div className="App">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          posts?.map((item) => (
            // Presently we only fetch
            // title from the API
            <h4>{item.title}</h4>
          ))
        )}
      </div>
 */}
      {/* <ControlVsUncontrol /> */}
      {/* <SortArray /> */}
      {/* <ControlledComponent /> */}
      {/* <LogInFormJustPractice /> */}
      {/* <FormJustPractice /> */}
      {/* <Mycomponent /> */}

      {/* <InputField /> */}
      {/* <Input /> */}
      {/* <Form /> */}
      {/* <MapFilterFindPractice /> */}
      {/* <Heelo /> */}
      {/* <Filter /> */}
      {/* <JsPractice /> */}
      {/* <SeconsJsPracticeSheet /> */}
      {/* <JavascriptSearchMethod /> */}
      {/* <Array /> */}
      {/* <FrontLoginPage /> */}
      <PdfViewer />
    </>
  );
}

export default App;
