import styled from "@emotion/styled"

export const AdviceRindomizerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AdviseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
export const Result = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`

export const AdviceWrapper = styled.div`
  padding: 15px;
  border: 1px solid black;
  width: 300px;
  height: fit-content;
`
export const ButtonWrapper = styled.div`
  width: 300px;
  display: flex;
`
export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
`
