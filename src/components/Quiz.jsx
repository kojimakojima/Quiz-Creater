/** @format */

import React, { useState } from "react";

const Quiz = ({ e, i }) => {
  const [isShowA, setIsShowA] = useState(false);
  function handleIsShowA() {
    setIsShowA((isShowA) => !isShowA);
  }

  return (
    <li>
      Q{i + 1}. {e.question}
      <br />
      <button className="close-btn" onClick={handleIsShowA}>
        {isShowA ? "Close" : "Answer"}
      </button>
      {isShowA && <span>A. {e.answer}</span>}
    </li>
  );
};

export default Quiz;
