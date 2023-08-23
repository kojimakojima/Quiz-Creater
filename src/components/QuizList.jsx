/** @format */

import React from "react";
import Quiz from "./Quiz";

const QuizList = ({ quizList }) => {
  return (
    <div className="ta-center">
      <h2>Simple Quiz List</h2>
      <ul>
        {quizList.map((e, i) => (
          <Quiz e={e} i={i} key={e.id} />
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
