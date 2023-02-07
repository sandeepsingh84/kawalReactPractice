import React, { useState } from "react";

// Created controlled component
const ControlVsUncontrol = () => {
  // constructor();
  // {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.input = React.createRef();
  // }
  // const handleSubmit = (e) => {
  //   alert("A name was submitted: " + this.input.current.value);
  //   e.preventDefault();
  // };
  // return (
  const [name, setName] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  console.log("name", name);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsDisplay(true);
        }}
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />

        <div>{isDisplay ? name : ""}</div>
      </form>
    </>
    // <form onSubmit={this.handleSubmit}>
    //   <label>
    //     Name:
    //     <input defaultValue="Bob" type="text" ref={this.input} />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
    // <form
    //   onSubmit={(events) => {
    //     this.input-React.createRef();
    //     events.preventDefault();
    //     console.log("hello");
    //   }}
    //   id="carform"
    // >
    //   <input type="text" name="name" ref={this.input} />
    //   <label htmlFor="cars">Choose a car:</label>
    //   <select id="cars" name="carlist" form="carform">
    //     <option value="volvo">Volvo</option>
    //     <option value="saab">Saab</option>
    //     <option value="opel">Opel</option>
    //     <option value="audi">Audi</option>
    //   </select>
    //   <button type="submit">click</button>
    // </form>
  );
};

export default ControlVsUncontrol;
