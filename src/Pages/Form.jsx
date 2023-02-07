import React from "react";
import { useState } from "react";
const Form = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    // console.log("name", name);
    const value = event.target.value;
    // console.log("value", value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("successful");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        username
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        country:
        <input
          type="text"
          name="country"
          value={inputs.country || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
