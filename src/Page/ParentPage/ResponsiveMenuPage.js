import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const MenuContainer = styled.div`
  display: none;
  margin: 0 auto;
  width: 100%;
  height: 90px;
  background-color: #222;
  background: -webkit-linear-gradient(
    -45deg,

    rgba(190, 208, 234, 1) 51%,
    rgba(166, 192, 227, 1) 51%,
    rgba(175, 199, 232, 1) 62%,
    rgba(186, 208, 239, 1) 75%,
    rgba(153, 181, 219, 1) 88%,
    rgba(121, 155, 200, 1) 100%
  );
  @media (max-width: 1600px) {
    display: block;
  }
`;
const MenuUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MenuLi = styled.li`
  color: #e3e3e3;
  font-size: 0.8em;
  font-family: "Roboto-Regular";
  font-weight: 700;
  text-align: center;
  margin-left: 1.5vw;
  margin-top: 30px;
  width: 85px;
  height: 30px;
  line-height: 30px;

  border-radius: 10px;

  &:nth-child(1) {
    margin-top: 10px;
    background-color: none;
    border: none;
  }
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    background-color: #7c81eb;
  }
  @media (max-width: 500px) {
    font-size: 0.6em;
    &:nth-child(1) {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 80px;
  opacity: 0.9;
  height: 70px;
  margin-left: 10px;
  @media (max-width: 480px) {
    display: none;
  }
`;
const localStorageManager = () => {
  return [
    localStorage.removeItem("arr"),
    localStorage.removeItem("loginFlag"),
    localStorage.removeItem("dataList"),
    localStorage.removeItem("loginUser"),
    localStorage.removeItem("loginUserName"),
    localStorage.removeItem("user"),
    localStorage.removeItem("tempId"),
    localStorage.removeItem("tempArr"),
    localStorage.removeItem("todolistLength"),
  ];
};
const ResponsiveMenuPage = () => {
  const history = useNavigate();
  const excuteLogout = () => {
    localStorageManager();
    history("/login");
    // window.location.reload();
  };
  return (
    <>
      <MenuContainer>
        <MenuUl>
          <MenuLi>
            <Link to="/">
              <Logo src={require("../../img/latestLogo.svg").default}></Logo>
            </Link>
          </MenuLi>

          <MenuLi>
            <Link to="/writerecord">Write_Story</Link>
          </MenuLi>
          <MenuLi>
            <Link to="/readRecord">Read_Story</Link>
          </MenuLi>
          <MenuLi>
            <Link to="/schedulelist">Your_Season</Link>
          </MenuLi>

          <MenuLi onClick={excuteLogout}>
            <Link to="/login">???????????? </Link>
          </MenuLi>
        </MenuUl>
      </MenuContainer>
    </>
  );
};
export default ResponsiveMenuPage;
