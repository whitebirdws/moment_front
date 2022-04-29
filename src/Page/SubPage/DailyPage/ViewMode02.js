import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { managerActions } from "../../../store";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ViewAreLayoutContainer = styled.div`
  width: 1350px;
  height: 800px;
  margin: 0 auto;
  margin-left: 50px;
  @media (max-width: 1600px) {
    margin-left: 0;
    width: 90%;
    margin: 0 auto;
    height: 1000px;
  }
`;

const ViewAreaLayoutBar = styled.div`
  background: #fff;
  color: #222;
  height: 1px;
`;
const ViewAreaGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 1350px;
  height: 800px;
  margin: 0 auto;
  overflow-y: scroll;
  flex-wrap: wrap;
  color: white;
  @media (max-width: 1600px) {
    margin-left: 0;
    width: 100%;
    margin: 0 auto;
  }
`;

const ViewArea = styled.div`
  margin: 20px 20px 0 20px;
  width: 300px;
  height: 200px;
  font-size: 1em;
  color: #222;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 5px 20px #b1c6fe;
  padding: 10px;
  cursor: pointer;
`;
const ViewText = styled.div`
  height: 200px;
  overflow: hidden;
`;
const ViewTextTitle = styled.div`
  width: 250px;
  margin-top: 20px;
  border-bottom: 1px solid #222;
  color: #222;
  font-size: 1.3em;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
`;
const ViewMoreText = styled.div`
  margin-top: 10px;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
  color: #222;
  text-shadow: 1px 2px 2px #ccc;

  &:hover {
    color: blueviolet;
  }
`;
const WriteUser = styled.div`
  margin-bottom: 10px;
`;
const Span = styled.div`
  width: 650px;
  margin: 50px auto;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  font-size: 2em;
  font-weight: 500;
  text-align: center;
  text-shadow: none;
  padding: 10px;
  @media (max-width: 1600px) {
    width: 90%;
    font-size: 1.6em;
  }
`;
const ViewMode02 = () => {
  const dispatch = useDispatch();

  const ViewAreaRef = useRef(null);
  const names = useSelector((state) => state.manager.names);
  const setNamesActionFunc = useCallback(
    (findData) => {
      dispatch(managerActions.setNames(findData));
    },
    [dispatch]
  );

  const filterTargetIdFunc = useCallback(
    (targetId, title) => {
      dispatch(managerActions.setTargetId(targetId));

      localStorage.setItem("tempReLoading", "tempReLoading");
    },
    [dispatch]
  );

  const executeFetchData = useCallback(() => {
    fetch("/daily-records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Number(localStorage.getItem("user")),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNamesActionFunc(data); //데이터구분하기위해
        localStorage.setItem("arr", JSON.stringify(data));
      });
  }, [setNamesActionFunc]);

  useEffect(() => {
    let timerGuide = setTimeout(function () {
      let guide = localStorage.getItem("guide");
      if (guide === "success") {
        localStorage.removeItem("guide");
        // window.location.reload();
      }

      clearTimeout(timerGuide);
    }, 100);
  }, []);

  const initDataMap = useCallback(
    (key) => {
      let orginData = names;

      let afterData = orginData.slice(orginData).reverse();
      return afterData.map((value) => {
        const timezone = value.created_at.split("T");

        return (
          <div key={value.id}>
            <ViewArea className="ViewArea" ref={ViewAreaRef}>
              <ViewText>
                <WriteUser>
                  작성자: {localStorage.getItem("loginUserName")}님
                </WriteUser>
                <div>{timezone[0]}에 게시된 글입니다.</div>

                <ViewTextTitle>{value.title}</ViewTextTitle>
                <Link to={`/recordmanager/:${value.id}`}>
                  <ViewMoreText
                    onClick={() => filterTargetIdFunc(value.id, value.title)}
                  >
                    자세히 보기
                  </ViewMoreText>
                </Link>
              </ViewText>
            </ViewArea>
          </div>
        );
      });
    },
    [filterTargetIdFunc, names]
  );

  useEffect(() => {
    initDataMap(); //초기화면을 위해서
  }, [initDataMap]);
  useEffect(() => {
    executeFetchData();
  }, [executeFetchData]);
  return (
    <>
      <ViewAreLayoutContainer>
        <Span>&#10077;당신의 이야기 입니다.&#10078;</Span>

        <ViewAreaLayoutBar></ViewAreaLayoutBar>
        <ViewAreaGroup>{initDataMap()}</ViewAreaGroup>
      </ViewAreLayoutContainer>
    </>
  );
};
export default ViewMode02;
