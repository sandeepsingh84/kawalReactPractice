import React, { useState } from "react";

const SeconsJsPracticeSheet = () => {
  const [isItemsChange, setIsItemsChange] = useState(
    "This is my phone and my laptop and my pc"
  );
  const UpdateSentence = () => {
    let sentence = isItemsChange;
    let sentenceArray = sentence.split(" ");

    const sentenceArrayIndex = sentenceArray.findIndex((item) => item === "my");
    if (sentenceArrayIndex.index > 0) {
      sentenceArray.splice(sentenceArrayIndex, 1, "your");
    }

    console.log("sentenceArrayIndex", sentenceArrayIndex);
    let combinedSentence = "";
    sentenceArray?.map((data) => {
      combinedSentence = combinedSentence + " " + data;
      console.log("combinedSentence", combinedSentence);
    });
    setIsItemsChange(combinedSentence);
  };
  return (
    <div>
      <button
        onClick={() => {
          UpdateSentence();
        }}
      >
        click
      </button>
      <p>{isItemsChange}</p>
    </div>
  );
};

export default SeconsJsPracticeSheet;
