import React from "react";
import MenuPage from "../MenuPage";
import ResponsiveMenuPage from "../ResponsiveMenuPage";
import DailyRecord from "../../SubPage/DailyPage/DailyRecord";
import styled from "styled-components";
const ContentsPageContainer = styled.div`
  display: flex;

  background: -webkit-linear-gradient(
    -45deg,
    rgba(210, 223, 237, 1) 0%,
    rgba(200, 215, 235, 1) 26%,
    rgba(190, 208, 234, 1) 51%,
    rgba(166, 192, 227, 1) 51%,
    rgba(175, 199, 232, 1) 62%,
    rgba(186, 208, 239, 1) 75%,
    rgba(153, 181, 219, 1) 88%,
    rgba(121, 155, 200, 1) 100%
  );
`;
const SubContentsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1600px) {
    width: 100%;
    height: 900px;
  }
`;

const RecordManager = () => {
  return (
    <ContentsPageContainer>
      <MenuPage />
      <SubContentsPageContainer>
        <ResponsiveMenuPage />

        <DailyRecord />
      </SubContentsPageContainer>
    </ContentsPageContainer>
  );
};

export default RecordManager;
