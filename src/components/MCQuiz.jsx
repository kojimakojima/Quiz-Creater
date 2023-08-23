/** @format */

import React, { useState } from "react";

const shuffleArray = (array) => {
  // Create a copy of the original array to avoid modifying the original array
  const shuffledArray = [...array];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const getAlphabet = (n) => {
  switch (n) {
    case 0:
      return "a";
    case 1:
      return "b";
    case 2:
      return "c";
    case 3:
      return "d";
  }
};

const MCQuiz = ({ e, i }) => {
  const options = [e.answer, e.distractor1, e.distractor2, e.distractor3];
  const [shuffledOptions, setShuffledOptions] = useState(shuffleArray(options));
  const [rateOption, setRateOption] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  function handleAnswer(option, answer) {
    option === answer ? setRateOption(1) : setRateOption(-1);
    setSelectedOption(option);
    if (selectedOption === option) {
      setSelectedOption("");
      setRateOption(null);
    }
  }
  return (
    <div>
      <p>
        Q{i + 1}. {e.question}
      </p>
      {shuffledOptions.map((option, i) => (
        <button
          className="option-btn"
          key={i}
          onClick={() => handleAnswer(option, e.answer)}
          style={{
            backgroundColor: selectedOption === option ? "#abfff5" : "",
          }}
        >{`${getAlphabet(i)}.) ${option}`}</button>
      ))}
      {rateOption === null && <p></p>}
      {rateOption === 1 && (
        <p
          style={{ backgroundColor: "green" }}
        >{`Nice! Answer is "${e.answer}"`}</p>
      )}
      {rateOption === -1 && (
        <p
          style={{ backgroundColor: "#db5c2a" }}
        >{`"${selectedOption}" is Wrong. Try Again!`}</p>
      )}
    </div>
  );
};

export default MCQuiz;
