import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, answer }) => {
  const [showAnswer, setShowAnsewr] = useState(false);

  return (
    <div className="question">
      <div className="question-header">
        <h3>{title}</h3>
        <button className="btn" onClick={() => setShowAnsewr(!showAnswer)}>
          {showAnswer ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </div>
      {showAnswer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Question;
