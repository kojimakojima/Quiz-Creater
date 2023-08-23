/** @format */

import React, { useState } from "react";
import { Input } from "./Input";

const MakeQuiz = ({ onQuizList, setQuizType }) => {
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newQ || !newA) return;
    const newQuiz = {
      id: crypto.randomUUID(),
      question: newQ,
      answer: newA,
    };
    onQuizList((q) => [...q, newQuiz]);
    setNewQ("");
    setNewA("");
  }
  return (
    <div className="ta-center">
      <form onSubmit={handleSubmit}>
        <Input value={newQ} setter={setNewQ}>
          Question
        </Input>
        <Input value={newA} setter={setNewA}>
          Answer
        </Input>
        <div>
          <button className="quiz-btn">Create</button>
        </div>
      </form>
      <button className="quiz-btn" onClick={() => setQuizType(null)}>
        Go Back To Menu
      </button>
    </div>
  );
};

export default MakeQuiz;
