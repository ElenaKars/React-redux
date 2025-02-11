import Button from "components/Button/Button";
import { AdviceRindomizerWrapper, AdviceWrapper, AdviseCard, ButtonWrapper, ErrorMessage, Result } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { AdviceRandomazerActions, AdviceRandomazerSelectors } from "store/redux/adviceRandomizer/adviceRandomizerSlice";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";


function AdviceRindomizer() {
    const { data, error, status } = useAppSelector(AdviceRandomazerSelectors.adviceData);
    const dispatch = useAppDispatch();

    const advices = data.map((advice) => {
        return <AdviceWrapper key={v4()}>{advice}</AdviceWrapper>;
    });

    const getAdvice = () => {
        dispatch(AdviceRandomazerActions.getAdvice());
    };

    const reset = () => dispatch(AdviceRandomazerActions.reset());

    return (
        <AdviceRindomizerWrapper>
            <AdviseCard>
                <ButtonWrapper>
                    <Button name="Get Advice" onClick={getAdvice} disabled={status === 'loading'} />
                </ButtonWrapper>
                {status === 'loading' && <Spinner />}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Result>{advices}</Result>
                <ButtonWrapper>
                    {advices.length > 0 && <Button name='Delete All Advices' onClick={reset} />}
                </ButtonWrapper>
            </AdviseCard>
        </AdviceRindomizerWrapper>
    );
}

export default AdviceRindomizer;