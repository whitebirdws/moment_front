import React, { useCallback, useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img01 from "../../img/backgroundImg1.jpg";

const SignUpManagerContainer = styled.div`
  width: 1200px;
  height: 600px;

  margin: 180px auto 0;
  background-image: url(${img01});
  background-repeat: no-repeat;
  background-size: cover;

  opacity: 0.8;
  border-radius: 50px;
  @media (max-width: 1600px) {
    margin-left: 0;
    margin: 50px auto 50px;
    width: 90%;
  }
  &:hover {
    opacity: 1;
  }
`;
const SignUpManagerSubContainer = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;
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
  width: 300px;
  margin: 0 auto;
`;
const SignUpId = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #fff;
  &:focus {
    outline: none;
  }
`;
const StatusManager = styled.div`
  display: flex;
`;
const DuplicateStatus = styled.input`
  margin-top: 10px;
  border-radius: 10px;
  background-color: #b1c6fe;
  border: none;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 5px;
`;
const ResultStatus = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 250px;
  height: 30px;
  background-color: #b1c6fe;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  line-height: 30px;
  font-size: 0.9em;
  text-align: center;
`;
const PasswordManager = styled.div``;
const SignUpPassword = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;

  border: 1px solid #fff;
  &:focus {
    outline: none;
  }
`;
const SubmitButton = styled.div`
  width: 120px;
  height: 30px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: #b1c6fe;
  color: #fff;
  cursor: pointer;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
`;
const ResultPassword = styled.div`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  background-color: #b1c6fe;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  line-height: 30px;
  text-align: center;
`;
const H2 = styled.h2`
  width: 400px;
  height: 150px;
  margin: 0 auto 10px;
  color: #3e3e3e;
  font-size: 6em;
  text-align: center;
  text-shadow: 2px 2px 2px #fff;
`;
const Label = styled.label`
  color: #3e3e3e;

  font-weight: 600;
`;

const SignUpPage = () => {
  const history = useNavigate("");
  const signUpIdRef = useRef("");
  const signUpPwdRef = useRef("");
  const resultStatusRef = useRef("");
  const resultPasswordRef = useRef("");
  const confirmPwdRef = useRef("");
  const [idResultStatus, setIdResultStatus] = useState("");
  const [pwdReusltStatus, setPwdResultStatus] = useState("");
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const executeHomeFunc = () => {
    history("/");
  };

  function statusFetchData(signUpIdValue) {
    fetch(`${PROXY}/status-search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({
        signUpId: signUpIdValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIdResultStatus(data.result);
      });
  }
  const executeData = () => {
    if (signUpIdRef.current.value.length >= 2)
      statusFetchData(signUpIdRef.current.value);
  };
  const confirmPasswordData = useCallback((e) => {
    setPwdResultStatus(e.currentTarget.value);
  }, []);
  function submitFetchData(signUpIdValue, signUpPwdValue) {
    fetch(`${PROXY}/user-signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({
        signUp_id: signUpIdValue,
        signUp_password: signUpPwdValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          history("/login");
          // window.location.reload();
        }
      });
  }
  const executeSubmitFunc = () => {
    let signUpId = signUpIdRef.current.value;
    let signUpPwd = signUpPwdRef.current.value;
    if (signUpId === "")
      resultPasswordRef.current.textContent = "id값을 입력해주세요";
    if (signUpId !== "") submitFetchData(signUpId, signUpPwd);
  };
  useEffect(() => {
    resultStatusRef.current.textContent = idResultStatus;

    if (
      signUpPwdRef.current.value === pwdReusltStatus &&
      pwdReusltStatus.length > 5
    ) {
      resultPasswordRef.current.textContent = "일치합니다.";
    }
    if (signUpPwdRef.current.value !== pwdReusltStatus) {
      resultPasswordRef.current.textContent = "일치하지 않습니다.";
    }
  }, [confirmPasswordData, pwdReusltStatus, idResultStatus]);
  return (
    <>
      <SignUpManagerContainer>
        <SignUpManagerSubContainer>
          <HomeButtonManager>
            <HomeButton onClick={executeHomeFunc}>HOME</HomeButton>
          </HomeButtonManager>

          <H2>SignUp</H2>
          <form>
            <FormLayout>
              <Label htmlFor="signUpId">
                ID:
                <SignUpId type="text" id="signUpId" ref={signUpIdRef} />
              </Label>
              <StatusManager>
                <DuplicateStatus
                  type="button"
                  id="idStatus"
                  value="중복여부"
                  onClick={executeData}
                />
                <ResultStatus ref={resultStatusRef}></ResultStatus>
              </StatusManager>
              <br />
              <PasswordManager>
                <Label htmlFor="signUpPwd">
                  비밀번호:
                  <SignUpPassword
                    type="password"
                    autoComplete="off"
                    id="signUpPwd"
                    ref={signUpPwdRef}
                  />
                </Label>
                <Label htmlFor="confirmPwd">
                  비밀번호 재확인:
                  <SignUpPassword
                    type="password"
                    autoComplete="off"
                    id="confirmPwd"
                    ref={confirmPwdRef}
                    onChange={(e) => confirmPasswordData(e)}
                  />
                </Label>
                <ResultPassword ref={resultPasswordRef}></ResultPassword>
              </PasswordManager>

              <SubmitButton onClick={executeSubmitFunc}>Submit</SubmitButton>
            </FormLayout>
          </form>
          <label />
        </SignUpManagerSubContainer>
      </SignUpManagerContainer>
    </>
  );
};

export default SignUpPage;
