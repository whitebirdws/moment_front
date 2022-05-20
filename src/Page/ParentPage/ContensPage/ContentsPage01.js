import React from "react";
import MenuPage from "../MenuPage";
import ResponsiveMenuPage from "../ResponsiveMenuPage";
import ViewMode02 from "../../SubPage/DailyPage/ViewMode02";

import styled from "styled-components";

const ContentsPageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  width: 1920px;

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
  @media (max-width: 1920px) {
    width: 100%;
  }
  @media (max-width: 1600px) {
    flex-direction: column;
  }
`;
const ContentsPageSubContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
const ContentsPage01 = () => {
  return (
    <ContentsPageContainer>
      <MenuPage />
      <ResponsiveMenuPage />
      <ContentsPageSubContainer>
        {localStorage.getItem("loginFlag") === "true" && <ViewMode02 />}
      </ContentsPageSubContainer>
    </ContentsPageContainer>
  );
};

export default ContentsPage01;
