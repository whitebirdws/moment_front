import React from "react";
import DailyPageMenu from "./DailyPageMenu";
import styled from "styled-components";
const DailyPageMainContainer = styled.div`
  width: 1200px;
  margin-left: 0px;
  margin: 0 auto;
  margin-left: 110px;
  @media (max-width: 1600px) {
    margin-top: 90px;
    width: 90%;
    margin: 0 auto;
  }
`;

const LAYOUT_BOX01_DAILY_PAGE = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 5px;
`;
const H2 = styled.h2`
  margin-top: 50px;
  color: #fff;
  font-size: 2em;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1600px) {
    margin-top: 30px;
    font-size: 1.6em;
  }
`;
const DailyPage = ({ test }) => {
  return (
    <>
      <DailyPageMainContainer>
        <H2>&#10077; 당신의 이야기 를 기록해보세요&#10078; </H2>
        <LAYOUT_BOX01_DAILY_PAGE></LAYOUT_BOX01_DAILY_PAGE>
        <DailyPageMenu />
      </DailyPageMainContainer>
    </>
  );
};

export default DailyPage;
