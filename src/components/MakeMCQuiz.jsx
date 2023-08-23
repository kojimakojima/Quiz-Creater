/** @format */

import React from "react";
import { Input } from "./Input";
import { useState } from "react";

const MakeMCQuiz = ({ onMCQuizList, setQuizType }) => {
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");
  const [newD1, setNewD1] = useState("");
  const [newD2, setNewD2] = useState("");
  const [newD3, setNewD3] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newQ || !newA || !newD1 || !newD2 || !newD3) return;
    const newQuiz = {
      id: crypto.randomUUID(),
      question: newQ,
      answer: newA,
      distractor1: newD1,
      distractor2: newD2,
      distractor3: newD3,
    };
    onMCQuizList((q) => [...q, newQuiz]);
    setNewQ("");
    setNewA("");
    setNewD1("");
    setNewD2("");
    setNewD3("");
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
        <Input value={newD1} setter={setNewD1}>
          Distractor 1
        </Input>
        <Input value={newD2} setter={setNewD2}>
          Distractor 2
        </Input>
        <Input value={newD3} setter={setNewD3}>
          Distractor 3
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

export default MakeMCQuiz;
