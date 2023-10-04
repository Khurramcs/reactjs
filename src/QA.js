import React, { useState } from 'react';

const questions = [
  {
    question: "Intuitively group categories to make a much better user experience",
    answer: "By organizing your questions into natural categories a user can quickly navigate to what they need. Imagine the same process as an information architecture."
  },
  {
    question: "Write your question from the perspective of the customer",
    answer: "This helps the user connect with the question more easily and it helps you to provide relevant information more clearly."
  },
  {
    question: "Use language that your user will understand",
    answer: "Following copywriting 101 standards, always use language and terminology that your user understands so that they will connect with the dialogue and your brand. Never use terminology or complex ‘industry speak’ that your user might not understand"
  },
  {
    question: "Use your brand personality and Tone of Voice",
    answer: "Your FAQ is an extension of customer services, so this is a space where you want to show users how great you are. As with all the content on your website, use your personality and connect with your audience. Every piece of content is an opportunity to represent your brand."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h1>Questions Answers</h1>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <div
              onClick={() => toggleAnswer(index)}
              className={`question ${activeIndex === index ? 'active' : ''}`}
              style = {{cursor: 'pointer'}}
              >
              {q.question}
            </div>
            <h3>{activeIndex === index && <div className="answer">{q.answer}</div>}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;