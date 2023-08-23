/** @format */

import React from "react";
import MCQuiz from "./MCQuiz";

const MCQuizList = ({ mCQuizList }) => {
  return (
    <div className="ta-center">
      <h2>Multiple Choice Quiz List</h2>
      <ul>
        {mCQuizList.map((e, i) => (
          <MCQuiz e={e} i={i} key={e.id} />
        ))}
      </ul>
    </div>
  );
};

export default MCQuizList;
