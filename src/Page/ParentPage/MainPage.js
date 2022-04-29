import React from "react";
import styled from "styled-components";
import img01 from "../../img/backgroundImg1.jpg";
import { Link } from "react-router-dom";

const MainpageSubContainer01 = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background-image: url(${img01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainpageSubContainer02 = styled.div`
  position: absolute;

  width: 100%;
  height: 312px;
  top: 300px;
  align-items: center;
  color: #6c33e5;
`;
const MainpageSubContainer03 = styled.div`
  width: 100%;
  height: 250px;

  text-align: center;
  line-height: 250px;
  font-size: 5rem;
  font-family: "NotoSansBoldItalic";
  font-weight: bold;
  color: #fff;
  animation-name: texteffect;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @keyframes texteffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1400px) {
    font-size: 5em;
  }
  @media (max-width: 1100px) {
    font-size: 3em;
  }
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const MainpageLogoLayout = styled.div`
  border-radius: 30px;

  width: 100%;
  height: 10px;
  background-color: #efef;
  animation-name: texteffect02;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  @keyframes texteffect02 {
    from {
      opacity: 0;
      width: 10%;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const MainpageLogo = styled.img`
  opacity: 0.9;
  margin-top: 150px;
  width: 300px;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  animation-name: texteffect;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;
const MainpageText = styled.div`
  margin: 50px auto;
  font-size: 1.2em;
  font-family: "Roboto-Regular";
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    #fceabb 0%,
    #fccd4d 50%,
    #f8b500 51%,
    #fbdf93 100%
  );
  width: 400px;
  padding: 10px;
  border-radius: 45px;
  box-sizing: border-box;
  animation-name: texteffect;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  &:hover {
    color: yellow;
  }
  @media (max-width: 768px) {
    width: 200px;
    font-size: 0.8em;
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MainPage = () => {
  return (
    <>
      <MainpageSubContainer01>
        <Link to="/">
          <MainpageLogo src={require("../../img/latestLogo.svg").default} />
        </Link>
        <MainpageSubContainer02>
          <MainpageSubContainer03>Our precious moment.</MainpageSubContainer03>

          <MainpageLogoLayout></MainpageLogoLayout>
          <Link to="/login">
            <MainpageText>Write it down.</MainpageText>
          </Link>
        </MainpageSubContainer02>
      </MainpageSubContainer01>
    </>
  );
};
export default MainPage;
