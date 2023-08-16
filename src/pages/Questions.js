import React from "react";
import QuestionList from "../components/questions/QuestionList";

const questions = [
  {
    id: 0,
    title: "How can I download a book?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa adipisci maiores veritatis earum delectus sint eaque cupiditate dolor et? Cum iste assumenda repellendus accusantium magni atque eos commodi, magnam itaque.",
  },
  {
    id: 1,
    title: "Can I share books?",
    answer:
      "facere odio ipsum voluptates hic fugit nihil repudiandae assumenda rem similique minus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa adipisci maiores veritatis earum delectus sint eaque cupiditate dolor et? Cum iste assumenda repellendus accusantium magni atque eos commodi, magnam itaque.",
  },
  {
    id: 2,
    title: "How can I delete my account?",
    answer:
      "rem similique minus aut minima, ut incidunt. Sequi, perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa adipisci maiores veritatis earum delectus sint eaque cupiditate dolor et? Cum iste assumenda repellendus accusantium magni atque eos commodi, magnam itaque.",
  },
  {
    id: 3,
    title: "How users public a book in BOOKS?",
    answer:
      "ipsum voluptates hic fugit nihil repudiandae  assumenda rem similique minus aut minima Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa adipisci maiores veritatis earum delectus sint eaque cupiditate dolor et? Cum iste assumenda repellendus accusantium magni atque eos commodi, magnam itaque.",
  },
  {
    id: 4,
    title: "How to change profile picture?",
    answer:
      "Unde veniam eos necessitatibus facere odio ipsum voluptates hic.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa adipisci maiores veritatis earum delectus sint eaque cupiditate dolor et? Cum iste assumenda repellendus accusantium magni atque eos commodi, magnam itaque.",
  },
  
];

const Questions = () => {
  return (
    <section className="section question-section">
      <div className="container">
        <QuestionList
        questions={questions}
        />
      </div>
    </section>
  );
};

export default Questions;
