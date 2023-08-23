import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, H1, Text, Button } from "../TestPageLink/TestLink.styled";
import "./testLink.css";

export default function TestLink() {
  return (
    <div className="IMG">
      <Wrapper>
        <H1>Давайте определим, что вам нравится</H1>
        <Text>
          Пройдите короткий тест и мы покажем подходящие вам стилевые решения
        </Text>
        <Link to="/test">
          <Button>Пройти тест</Button>
        </Link>
      </Wrapper>
    </div>
  );
}
