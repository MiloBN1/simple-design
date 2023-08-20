import React, { useState } from "react";
import { Wrapper, H1, Question, QuesName, Text } from "./Questions.styled";
import plus from "../../../Assets/img-mainpage/plus.svg";

export default function Questions() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <Wrapper>
      <H1>Часто задаваемые вопросы</H1>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <Question onClick={() => toggleQuestion(index)}>
            <img src={plus} alt="img" />
            <QuesName>Вопрос</QuesName>
          </Question>
          {activeQuestion === index && (
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus
              soluta itaque iure maiores? Suscipit aut voluptatem, odit qui
              doloremque labore voluptatum at?
            </Text>
          )}
        </div>
      ))}
    </Wrapper>
  );
}
