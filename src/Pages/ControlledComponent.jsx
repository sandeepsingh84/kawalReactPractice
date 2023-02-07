import React, { useState } from "react";

const ControlledComponent = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [fatherName, setFatherName] = useState();
  const [motherNmae, setMotherNmae] = useState();
  const [phone, setPhone] = useState();
  const [martailStatus, setMartailStatus] = useState("");
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [data, setData] = useState([]);

  const formm = (e) => {
    console.log("e", e);
    alert("successfull");
    e.preventDefault();
    let array = [];
    let object = {
      firstName: firstName,
      lastName: lastName,
      fatherName: fatherName,
      motherNmae: motherNmae,
      phone: phone,
      martailStatus: martailStatus,
      email: email,
      address: address,
    };
    array = [object];

    console.log("array", array);
    setData(array);
    // console.log("object", object);
  };
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            formm(e);
            setFirstName("");
            setLastName("");
            setAddress("");
            setPhone("");
            setMartailStatus("");
            setFatherName("");
            setMotherNmae("");
            setEmail("");
          }}
        >
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div style={{ marginRight: "30px" }}>
              <label htmlFor="fname">First name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                required={true}
                alert="Please enter"
              />
            </div>
            <div>
              <label htmlFor="lname">Last name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                autoComplete={true}
              />
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div style={{ marginRight: "30px" }}>
              <label htmlFor="fname">Father name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setFatherName(e.target.value);
                }}
                value={fatherName}
              />
            </div>
            <div>
              <label htmlFor="lname">Mother name:</label>
              <input
                type="text"
                onChange={(e) => {
                  setMotherNmae(e.target.value);
                }}
                value={motherNmae}
              />
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div style={{ marginRight: "30px" }}>
              <label htmlFor="fname"> Phone no:</label>
              <input
                type="number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </div>
            <div>
              <label htmlFor="lname"> Email:</label>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div style={{ marginRight: "30px" }}>
              <label htmlFor="fname">martial status:</label>
              {/* <select
                onChange={(e) => {
                  setMartailStatus(e.target.value);
                }}
                value={martailStatus}
                name=""
                defaultValue={""}
              >
                <option value="married">married</option>
                <option value="unmarried">unmarried</option>
              </select> */}
              <input
                list="browsers"
                name="browser"
                onChange={(e) => {
                  setMartailStatus(e.target.value);
                }}
                value={martailStatus}
                required
              />
              <datalist id="browsers">
                <option value="married"></option>
                <option value="unmarried"></option>
              </datalist>

              {/* <input
                type="text"
                onChange={(e) => {
                  setMartailStatus(e.target.value);
                }}
                value={martailStatus}
              /> */}
            </div>
            <div>
              <label htmlFor="lname">Address:</label>
              <input
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </div>
          </div>
          <div>
            <div>
              <button>cancel</button>
            </div>
            <div>
              <button
              //   onClick={}
              >
                submit
              </button>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("data", data[0]?.firstName);

              setFirstName(data[0]?.firstName);
              setLastName(data[0]?.lastName);
              setMartailStatus(data[0]?.martailStatus);
              setFatherName(data[0]?.fatherName);
              setMotherNmae(data[0]?.motherNmae);
              setAddress(data[0]?.address);
              setPhone(data[0]?.phone);
              setEmail(data[0]?.email);
            }}
          >
            populate
          </button>
        </form>
        {data.length > 0 && (
          <div>
            {data?.map((item) => (
              <div>
                <p>firstName : {item.firstName}</p>
                <p>lastName : {item.lastName}</p>
                <p> fatherName : {item.fatherName}</p>
                <p> motherNmae : {item.motherNmae}</p>
                <p> phone : {item.phone}</p>
                <p> email : {item.email}</p>
                <p> martailStatus : {item.martailStatus}</p>
                <p> address : {item.address}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ControlledComponent;
