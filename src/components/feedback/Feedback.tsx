import { useState } from "react";
import Button from "../Button/Button";
import likeIcon from "../../assets/like-icon.svg";
import dislikeIcon from "../../assets/dislike-icon.svg";
import { FeedbackWrapper, FeedbackContainer, Counter, ButtonWrapper } from "./styles";

function Feedback() {
  const [countLikes, setLikes] = useState<number>(0);
  const [countDislikes, setDislikes] = useState<number>(0);

  const incrLikes = (): void => {
    setLikes((state) => state + 1);
  };
  const incrDislikes = (): void => {
    setDislikes((state) => state + 1);
  };

  const reset = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <FeedbackWrapper>
      <FeedbackContainer>
        <Counter>{countLikes}</Counter>
        <ButtonWrapper>
          <Button
            type='button'
            name="Like"
            onClick={incrLikes}
            imgSrc={likeIcon}
            altImg="Like Icon"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            type='button'
            name="Dislike"
            onClick={incrDislikes}
            imgSrc={dislikeIcon}
            altImg="Dislike Icon"
          />
        </ButtonWrapper>
        <Counter>{countDislikes}</Counter>
      </FeedbackContainer>
      <ButtonWrapper>
        <Button type='button' id="reset-button" name="RESET" onClick={reset} />
      </ButtonWrapper>
    </FeedbackWrapper>
  );
}

export default Feedback;
