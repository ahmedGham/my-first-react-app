import React from "react";
import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <div className="question-list">
      {questions.map((question,index) => {
        return <Question key={index} {...question}/>;
      })}
      <div></div>
    </div>
  );
};

export default QuestionList;
