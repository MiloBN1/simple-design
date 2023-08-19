import {React, useState} from "react";
import { Wrapper, H1, Question, QuesName, Text} from "./Questions.styled";
import plus from "../../../Assets/img-mainpage/plus.svg";

export default function Questions() {

  const DropDown = ({ children }) => {
    const [isTextOpen, setIsTextOpen] = useState(false);
  
    const toggleText = () => {
      setIsTextOpen(!isTextOpen);
    };
  
    return (
      <div className="question">
        <button onClick={toggleText}>
          <img src={plus} alt="img" />
          <QuesName>Вопрос</QuesName>
        </button>
        {isTextOpen && <Text>{children}</Text>}
      </div>
    );
  };

  return (
    <Wrapper>
      <H1>Часто задаваемые вопросы</H1>
      <Question>
        <img src={plus} alt="img" />
        <QuesName>Вопрос</QuesName>
      </Question>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus soluta itaque iure maiores? Suscipit aut voluptatem, odit qui doloremque labore voluptatum at?</Text>

      <Question>
        <img src={plus} alt="img" />
        <QuesName>Вопрос</QuesName>
      </Question>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus soluta itaque iure maiores? Suscipit aut voluptatem, odit qui doloremque labore voluptatum at?</Text>

      <Question>
        <img src={plus} alt="img" />
        <QuesName>Вопрос</QuesName>
      </Question>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus soluta itaque iure maiores? Suscipit aut voluptatem, odit qui doloremque labore voluptatum at?</Text>

      <Question>
        <img src={plus} alt="img" />
        <QuesName>Вопрос</QuesName>
      </Question>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus soluta itaque iure maiores? Suscipit aut voluptatem, odit qui doloremque labore voluptatum at?</Text>

      <Question>
        <img src={plus} alt="img" />
        <QuesName>Вопрос</QuesName>
      </Question>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum necessitatibus iste mollitia ea. Fugiat, repellat a necessitatibus soluta itaque iure maiores? Suscipit aut voluptatem, odit qui doloremque labore voluptatum at?</Text>
    </Wrapper>
  );
}
