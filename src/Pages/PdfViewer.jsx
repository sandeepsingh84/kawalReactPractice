import React from "react";
import FileSaver from "file-saver";
// import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import fileDownload from "js-file-download";
import moment from "moment";

const PdfViewer = () => {
  const dupArr = [
    { created_time: "22-sep-2022 4:11AM" },
    { created_time: "22-sep-2022 4:15AM" },
    { created_time: "11-sep-2022 4:11AM" },
    { created_time: "10-sep-2022 4:11AM" },
    { created_time: "10-sep-2022 4:15AM" },
    { created_time: "22-sep-2022 4:16AM" },
    { created_time: "11-sep-2022 4:12AM" },
    { created_time: "19-sep-2022 4:12AM" },
  ];

  let newArr = dupArr.map((item) =>
    moment(item?.created_time?.split(" ")?.[0]).format("LL")
  );

  const toFindDuplicates = newArr.filter(
    (item, index) => newArr.indexOf(item) !== index
  );
  // const duplicateElementa = tofindDuplicates(arry);

  // toFindDuplicates?.map((item)=>{
  //   let findItems = dupArr?.filter
  // })
  let newItems = [];

  dupArr?.map((value, idx) => {
    if (
      toFindDuplicates?.includes(
        moment(value?.created_time?.split(" ")?.[0]).format("LL")
      )
    ) {
      // let isAlreadyPresent = newItems?.findedValue?.includes(
      //   moment(value?.created_time?.split(" ")?.[0]).format("LL")
      // );
      let isAlreadyPresent = newItems?.filter(
        (items) =>
          moment(items?.findedValue[0]?.created_time?.split(" ")?.[0]).format(
            "LL"
          ) === moment(value?.created_time?.split(" ")?.[0]).format("LL")
      );
      console.log("isAlreadyPresent", isAlreadyPresent);
      if (isAlreadyPresent?.length > 0) {
        newItems?.map((items, index) => {
          if (
            moment(items?.findedValue[0]?.created_time?.split(" ")?.[0]).format(
              "LL"
            ) === moment(value?.created_time?.split(" ")?.[0]).format("LL")
          ) {
            newItems[index] = {
              ...items,
              findedValue: [...newItems[index]?.findedValue, value],
            };
          }
        });
      } else {
        newItems[idx] = {
          ...value,
          findedValue: [value],
        };
      }
    } else {
      newItems[idx] = {
        ...value,
        findedValue: [value],
      };
    }
  });

  console.log("newItems", newItems);

  const saveFile = () => {
    // FileSaver.saveAs(
    //   process.env.PUBLIC_URL +
    //     "http://www.africau.edu/images/default/sample.pdf",
    //   "MyCV.pdf"
    // );

    // axios
    //   .get("http://www.africau.edu/images/default/sample.pdf", {
    //     responseType: "blob",
    //   })
    //   .then((res) => {
    //     fileDownload(res.data, "file.pdf");
    //   });

    // fetch(
    //   "https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/pdf",
    //       "Access-Control-Allow-Origin": "http://localhost:3000",
    //       "Access-Control-Allow-Credentials": "true",
    //       "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
    //       "Access-Control-Allow-Headers": "X-Token",
    //     },
    //   }
    // )
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     // Create blob link to download
    //     const url = window.URL.createObjectURL(new Blob([blob]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", `FileName.pdf`);

    //     // Append to html link element page
    //     document.body.appendChild(link);

    //     // Start download
    //     link.click();

    //     // Clean up and remove the link
    //     link.parentNode.removeChild(link);
    //   });

    // const link = document.createElement("iframe");
    // link.download =
    //   "https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf";

    var iframe = document.getElementById("myIFrame");
    // iframe.contentWindow.body.addEventListener("download", Handler);

    iframe.addEventListener("load", Handler);
    function Handler() {
      alert("works");
    }
    // console.log("iframe.contentWindow.body", iframe.addEventListener("load"));
    // <iframe
    //   title="download"
    //   src="https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf"
    //   download
    // />;
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <button className="cv" onClick={saveFile}>
        Download File
      </button>
      {/* <Link
        // to="http://www.africau.edu/images/default/sample.pdf"
        href="http://www.africau.edu/images/default/sample.pdf"
        target="_blank"
        download
      >
        Download
      </Link> */}
      <iframe
        src="http://www.africau.edu/images/default/sample.pdf"
        id="myIFrame"
      />
    </div>
  );
};

export default PdfViewer;
