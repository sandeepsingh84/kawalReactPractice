import React, { useState } from "react";

const FormJustPractice = () => {
  const [name, setname] = useState("");
  console.log("name", name);
  const [address, setAddress] = useState("");
  console.log("address", address);
  const [myCity, setMyCity] = useState("");
  console.log("myCity", myCity);
  const [inputValue, setInputValue] = useState([]);
  console.log("inputValue", inputValue);
  const [submitting, setSubmitting] = useState(false);

  const form = (event) => {
    event.preventDefault();
    // alert("please enter something");
    // `The name you entered was: ${name},  The address you entered was: ${address}`
    let array = [];
    let object = {
      name: name,
      address: address,
      city: myCity,
    };
    array = [object];
    setInputValue(array);
  };
  const handleSubmit = () => {
    if (name?.length === 0 || address?.length === 0) {
      return alert("Please enter");
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          form(e);
        }}
      >
        {/* <h1>info about submittion</h1> */}
        {submitting === true ? (
          <h1>submitting form.......</h1>
        ) : (
          <div>
            <label htmlFor="fn">name</label>
            <input
              type="text"
              onChange={(e) => {
                // console.log("e", e);
                setname(e.target.value);
              }}
              value={name}
              name="name"
            />
            <label htmlFor="add">address</label>
            <input
              type="text"
              onChange={(e) => {
                // console.log("e", e);
                setAddress(e.target.value);
              }}
              value={address}
              name="address"
            />
            <label htmlFor="car">city</label>
            <select
              value={myCity}
              onChange={(e) => {
                // console.log("e", e);
                setMyCity(e.target.value);
              }}
            >
              <option value="">--Please choose an option--</option>
              <option value="Amritsar">Amritsar</option>
              <option value="jalandhar">jalandhar</option>
              <option value="chandigarh">chandigarh</option>
            </select>
            <input type="submit" value="submit" onClick={handleSubmit} />
          </div>
        )}
      </form>
      {/* {inputValue.length > 0 && (
        <div>
          {inputValue?.map((data) => (
            <div>
              <div>{data?.name}</div>
              <div>{data?.address}</div>
              <div>{data?.city}</div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default FormJustPractice;
