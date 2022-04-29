import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const AlarmPageContainer = styled.div`
  position: absolute;
  width: 75vw;
  height: 950px;
  top: 0;
  left: 24%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 10;
  @media (max-width: 1600px) {
    left: 0;
    width: 100%;
  }
`;
const AlarmPageText = styled.div`
  margin-top: 300px;
  text-align: center;
  font-size: 2em;
`;
const AlarmPageButtonManager = styled.div`
  width: 300px;
  margin: 0 auto;
`;
const AlarmPageCloseButton = styled.input`
  width: 300px;
  height: 30px;
  background: linear-gradient(
    135deg,
    #fceabb 0%,
    #fccd4d 50%,
    #f8b500 51%,
    #fbdf93 100%
  );
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const closeFunc = () => {
  localStorage.removeItem("isSaved");
  // window.location.reload();
};
const AlarmPage = () => {
  let successfulAlarmMessage = "Data was saved successfully!";
  let failedAlarmMessage =
    "Sorry but your data has not saved! You should check on your form";
  const [guideMessage, setGuideMessage] = useState("");
  const excuteConditionFunc = useCallback(() => {
    let isSaved = localStorage.getItem("isSaved");

    if (isSaved === "success") {
      setGuideMessage(successfulAlarmMessage);
    }
    if (isSaved === "failure") {
      setGuideMessage(failedAlarmMessage);
    }
  }, [successfulAlarmMessage, failedAlarmMessage]);
  useEffect(() => {
    excuteConditionFunc();
  }, [excuteConditionFunc]);

  return (
    <>
      <AlarmPageContainer>
        <AlarmPageText>{guideMessage}</AlarmPageText>
        <AlarmPageButtonManager>
          <AlarmPageCloseButton
            type="button"
            value="Close"
            onClick={closeFunc}
          />
        </AlarmPageButtonManager>
      </AlarmPageContainer>
    </>
  );
};
export default AlarmPage;
