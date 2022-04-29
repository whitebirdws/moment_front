import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import img01 from "../../img/backgroundImg1.jpg";
import { useSelector } from "react-redux";
const MenuContainer = styled.div`
  width: 432px;

  margin-left: 20px;
  background-image: url(${img01});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1600px) {
    display: none;
  }
`;
const LoginMenuUl = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
const LoginMenuLi = styled.li`
  width: 100px;
  height: 30px;
  background-color: #9cc3fd;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;
const LoginMenuSubUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoginMenuSubLi = styled.li`
  width: 100px;
  height: 30px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  line-height: 30px;
  text-align: center;

  &:nth-child(1) {
    margin-bottom: 10px;
  }
  &:nth-child(2) {
    cursor: pointer;
    &:hover {
      background-color: #9cc3fd;
    }
  }
`;
const MenuUl = styled.ul`
  width: 432px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MenuLi = styled.li`
  color: #fff;
  font-size: 1.2rem;
  font-family: "Roboto-Regular";
  font-weight: 700;
  text-align: center;
  &:nth-child(1) {
    margin-bottom: 26px;
  }

  &:nth-child(2) {
    width: 376px;
    height: 94px;
    color: #fff;
    margin-bottom: 36px;
    line-height: 94px;
    border-radius: 45px;
    background: -webkit-linear-gradient(
      -45deg,
      rgba(210, 223, 237, 1) 0%,
      rgba(200, 215, 235, 1) 26%,
      rgba(190, 208, 234, 1) 51%,
      rgba(166, 192, 227, 1) 51%,
      rgba(153, 181, 219, 1) 88%,
      rgba(121, 155, 200, 1) 100%
    );
  }

  &:nth-child(3) {
    width: 376px;
    height: 94px;
    line-height: 94px;
    border-radius: 45px;

    &:hover {
      background: -webkit-linear-gradient(
        -45deg,
        rgba(210, 223, 237, 1) 0%,
        rgba(200, 215, 235, 1) 26%,
        rgba(190, 208, 234, 1) 51%,
        rgba(166, 192, 227, 1) 51%,
        rgba(153, 181, 219, 1) 88%,
        rgba(121, 155, 200, 1) 100%
      );
    }
    @media (max-width: 1200px) {
      width: 100px;
    }
  }
  &:nth-child(4) {
    width: 376px;
    height: 94px;
    line-height: 94px;
    border-radius: 45px;

    &:hover {
      background: -webkit-linear-gradient(
        -45deg,
        rgba(210, 223, 237, 1) 0%,
        rgba(200, 215, 235, 1) 26%,
        rgba(190, 208, 234, 1) 51%,
        rgba(166, 192, 227, 1) 51%,
        rgba(153, 181, 219, 1) 88%,
        rgba(121, 155, 200, 1) 100%
      );
    }
  }
  &:nth-child(5) {
    margin-bottom: 50px;
    width: 376px;
    height: 94px;
    line-height: 94px;
    border-radius: 45px;

    &:hover {
      background: -webkit-linear-gradient(
        -45deg,
        rgba(210, 223, 237, 1) 0%,
        rgba(200, 215, 235, 1) 26%,
        rgba(190, 208, 234, 1) 51%,
        rgba(166, 192, 227, 1) 51%,
        rgba(153, 181, 219, 1) 88%,
        rgba(121, 155, 200, 1) 100%
      );
    }
  }
  &:nth-child(6) {
    width: 80%;
    padding: 5px;
    border-radius: 45px;
    font-size: 1rem;
    font-weight: lighter;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  opacity: 0.9;
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
const MenuPage = () => {
  const history = useNavigate();
  const userId = useSelector((state) => state.loginManager.userId);
  const executePageModeFunc = () => {
    localStorageManager();
  };
  const reloadPageFunc = () => {
    // window.location.reload();
    //scheduleList페이지에서 cancel번튼이나 save버튼을 선택하지 않고
    //페이지를 벗어난후 calendar페이지에 다시 접속하고자 클릭했을경우를
    // 대비하여 todolistviwer(flag)초기화 시키기위하여 강제적으로
    // 리로드 해줍니다.
  };
  const excuteLogin = () => {
    history("/login");
    // window.location.reload();
  };
  const excuteLogout = () => {
    localStorageManager();
    history("/login");
    // window.location.reload();
  };

  return (
    <>
      <MenuContainer>
        <LoginMenuUl>
          {localStorage.getItem("loginFlag") === "true" ? (
            <>
              <LoginMenuSubUl>
                {localStorage.getItem("loginUserName") ? (
                  <LoginMenuSubLi>
                    {localStorage.getItem("loginUserName")}님
                  </LoginMenuSubLi>
                ) : (
                  <LoginMenuSubLi>{userId}님</LoginMenuSubLi>
                )}

                <LoginMenuSubLi onClick={excuteLogout}>LogOut</LoginMenuSubLi>
              </LoginMenuSubUl>
            </>
          ) : (
            <LoginMenuLi onClick={excuteLogin}>Login</LoginMenuLi>
          )}
        </LoginMenuUl>

        <MenuUl>
          <MenuLi onClick={executePageModeFunc}>
            <Link to="/">
              <Logo src={require("../../img/latestLogo.svg").default}></Logo>
            </Link>
          </MenuLi>

          <MenuLi>the Menu</MenuLi>
          <MenuLi>
            <Link to="/writerecord">WRITE_YOUR_STORY</Link>
          </MenuLi>
          <MenuLi>
            <Link to="/readrecord">READ_YOUR_STORY</Link>
          </MenuLi>
          <MenuLi onClick={reloadPageFunc}>
            <Link to="/schedulelist">YOUR_SEASON</Link>
          </MenuLi>

          <MenuLi>whitebird</MenuLi>
        </MenuUl>
      </MenuContainer>
    </>
  );
};
export default MenuPage;
