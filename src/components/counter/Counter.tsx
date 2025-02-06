import { useState } from "react";
import Button from "../Button/Button";
import { CounterWrapper, ButtonsWrapper, ResultContainer } from "./styles";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const onMinusClick = (): void => {
    setCounter((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };
  return (
    <CounterWrapper>
      <ButtonsWrapper>
        <Button name="-" onClick={onMinusClick} type="button" />
      </ButtonsWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonsWrapper>
        <Button name="+" onClick={onPlusClick} type="button" />
      </ButtonsWrapper>
    </CounterWrapper>
  );
}

export default Counter;
