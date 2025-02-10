import Button from "../Button/Button";
import likeIcon from "../../assets/like-icon.svg";
import dislikeIcon from "../../assets/dislike-icon.svg";
import { FeedbackWrapper, FeedbackContainer, Counter, ButtonWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { feedbackActions, feedbackSelectors } from "store/redux/feedback/feedbackSlice";

function Feedback() {
  const like = useAppSelector(feedbackSelectors.countLikes);
  const dislike = useAppSelector(feedbackSelectors.countDislikes);

  const dispatch = useAppDispatch();

  const onLike = () => {
    dispatch(feedbackActions.like());
  };

  const onDislike = () => {
    dispatch(feedbackActions.dislikes());
  };

  const reset = () => {
    dispatch(feedbackActions.reset());
  };

  return (
    <FeedbackWrapper>
      <FeedbackContainer>
        <Counter>{like}</Counter>
        <ButtonWrapper>
          <Button
            type='button'
            name="Like"
            onClick={onLike}
            imgSrc={likeIcon}
            altImg="Like Icon"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            type='button'
            name="Dislike"
            onClick={onDislike}
            imgSrc={dislikeIcon}
            altImg="Dislike Icon"
          />
        </ButtonWrapper>
        <Counter>{dislike}</Counter>
      </FeedbackContainer>
      <ButtonWrapper>
        <Button type='button' id="reset-button" name="RESET" onClick={reset} />
      </ButtonWrapper>
    </FeedbackWrapper>
  );
}

export default Feedback;
