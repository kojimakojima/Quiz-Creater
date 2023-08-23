/** @format */
import { useState } from "react";
import Title from "./Title";
import MakeQuiz from "./MakeQuiz";
import QuizList from "./QuizList";
import MakeMCQuiz from "./MakeMCQuiz";
import MCQuizList from "./MCQuizList";
import Menu from "./Menu";

function App() {
  const [quizList, setQuizList] = useState([
    // { id: 111, question: "What's your name?", answer: "John" },
  ]);
  const [mCQuizList, setMCQuizList] = useState([
    // {
    //   id: 123,
    //   question:
    //     "Which document, adopted on July 4, 1776, declared the American colonies' independence from Great Britain?",
    //   answer: "Declaration of Independence",
    //   distractor1: "Mayflower Compact",
    //   distractor2: "Treaty of Paris",
    //   distractor3: "Articles of Confederation",
    // },
  ]);
  const [quizType, setQuizType] = useState(null);

  return (
    <div className="app">
      <div className="content">
        <Title />
        <Menu quizType={quizType} setQuizType={setQuizType} />
        {quizType === 1 && (
          <MakeQuiz onQuizList={setQuizList} setQuizType={setQuizType} />
        )}
        {quizType === 2 && (
          <MakeMCQuiz onMCQuizList={setMCQuizList} setQuizType={setQuizType} />
        )}
        {quizList.length > 0 && <QuizList quizList={quizList} />}
        {mCQuizList.length > 0 && <MCQuizList mCQuizList={mCQuizList} />}
      </div>
    </div>
  );
}

export default App;
