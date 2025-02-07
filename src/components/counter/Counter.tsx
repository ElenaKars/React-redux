import { counterActions, counterSelectors } from "store/redux/counter/counterSlice";
import Button from "../Button/Button";
import { CounterWrapper, ButtonsWrapper, ResultContainer } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";

function Counter() {
  const counter = useAppSelector(counterSelectors.counterValue);
  const dispatch = useAppDispatch();
  const onMinus = () => {
    dispatch(counterActions.minus());
  };
  const onPlus = () => {
    dispatch(counterActions.plus());
  };
  return (
    <CounterWrapper>
      <ButtonsWrapper>
        <Button name="-" onClick={onMinus} type="button" />
      </ButtonsWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonsWrapper>
        <Button name="+" onClick={onPlus} type="button" />
      </ButtonsWrapper>
    </CounterWrapper>
  );
}

export default Counter;
