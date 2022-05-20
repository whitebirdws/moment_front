import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { managerActions, loginManagerActions } from "../../store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img01 from "../../img/backgroundImg1.jpg";

const LoginManagerContainer = styled.div`
  width: 1200px;
  height: 500px;
  margin: 200px auto;
  background-image: url(${img01});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  opacity: 0.8;

  @media (max-width: 1600px) {
    margin-left: 0;
    margin: 50px auto 50px;
    width: 90%;
  }
  &:hover {
    opacity: 1;
  }
`;
const LoginManagerSubContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  @media (max-width: 1600px) {
    width: 100%;
  }
`;

const HomeButtonManager = styled.div`
  width: 100px;
  margin: 0 auto;
`;
const HomeButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 20px auto 0;
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #b1c6fe;
  }
`;

const FormLayout = styled.div`
  width: 200px;
  margin: 0 auto;
`;
const LoginId = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
  }
`;
const LoginPassword = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
  }
`;
const LoginButton = styled.div`
  width: 120px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: #b1c6fe;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
`;
const H2 = styled.h2`
  margin: 10px auto;
  width: 300px;
  color: #3e3e3e;
  font-size: 8em;
  text-shadow: 2px 2px 2px #fff;
  @media (max-width: 500px) {
    font-size: 2em;
    text-align: center;
    margin: 0 auto;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`;
const Label = styled.label`
  color: #3e3e3e;
  font-weight: 600;
`;

const LoginManager = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const history = useNavigate("");
  const dispatch = useDispatch();

  const userIdRef = useRef("");
  const userPwdRef = useRef("");

  const exucteLoginFlagActions = (flag) => {
    dispatch(managerActions.setLoginFlag(flag));
    localStorage.setItem("loginFlag", flag);
    history("/writerecord");
  };
  const exucteUserIdActions = (userId) => {
    dispatch(loginManagerActions.setUserId(userId));
  };
  function fetchData(id, pwd) {
    fetch(`${PROXY}/user-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loginId: id,
        loginPwd: pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          exucteLoginFlagActions(true);
          exucteUserIdActions(data.loginId);
          localStorage.setItem("user", data.flagId);
          localStorage.setItem("loginUserName", data.loginId);
        } else {
        }
      });
  }

  const executeData = () => {
    fetchData(userIdRef.current.value, userPwdRef.current.value);
  };
  const executeSignUp = () => {
    history("/signup");
  };
  const executeHomeFunc = () => {
    history("/");
  };
  return (
    <>
      <LoginManagerContainer>
        <LoginManagerSubContainer>
          <HomeButtonManager>
            <HomeButton onClick={executeHomeFunc}>HOME</HomeButton>
          </HomeButtonManager>

          <H2>Login</H2>
          <form>
            <FormLayout>
              <Label htmlFor="loginId">
                ID:
                <LoginId type="text" id="loginId" ref={userIdRef} />
              </Label>
              <Label htmlFor="loginPwd">
                Password:
                <LoginPassword
                  type="password"
                  autoComplete="off"
                  id="loginPwd"
                  ref={userPwdRef}
                />
              </Label>
              <LoginButton onClick={executeData}>Login</LoginButton>
              <LoginButton onClick={executeSignUp}>SignUp</LoginButton>
            </FormLayout>
          </form>
          <label />
        </LoginManagerSubContainer>
      </LoginManagerContainer>
    </>
  );
};

export default LoginManager;
