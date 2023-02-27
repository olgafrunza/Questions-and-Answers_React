import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          onClick={() => setDisplayDetails(!displayDetails)}
          className="btn"
        >
          {displayDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {displayDetails ? <p>{info}</p> : ""}
      {/* {displayDetails && <p>{info}</p>} */}
    </article>
  );
};

export default Question;
