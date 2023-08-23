/** @format */

import React from "react";

const Menu = ({ quizType, setQuizType }) => {
  return (
    <div className="ta-center">
      {quizType === null && (
        <button className="menu-btn" onClick={() => setQuizType(1)}>
          Create a Simple Quiz
        </button>
      )}
      {quizType === null && (
        <button className="menu-btn" onClick={() => setQuizType(2)}>
          Create a Multiple Choice Quiz
        </button>
      )}
    </div>
  );
};

export default Menu;
