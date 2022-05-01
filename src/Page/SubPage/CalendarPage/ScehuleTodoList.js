import styled from "styled-components";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { managerActions } from "../../../store";
import { useRef } from "react";
const ScehuleTodoListLayout = styled.div`
  margin-top: 250px;
  margin-left: 20px;
  width: 1425px;
  height: 500px;

  @media (max-width: 1600px) {
    width: 90%;
    height: 800px;
    margin: 50px auto;
  }
`;
const ScehuleTodoListLayoutContainer = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #fff;
  display: flex;
  background-color: rgba(255, 254, 254, 0.5);

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1600px) {
    width: 100%;

    flex-direction: column;
    align-items: center;
  }
`;
const TodoListManagerContainer = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  flex-direction: column;
  text-align: center;
`;
const IsSavedContainer = styled.div`
  display: flex;
  width: 220px;
  margin: 0 auto;
  align-items: center;
`;
const SaveButton = styled.div`
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 1em;
  font-weight: 600;
  margin: 10px auto;
  background-color: #c2d8f0;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background: #908fe6;
  }
`;
const CloseButton = styled.div`
  width: 100px;
  height: 50px;
  margin: 10px auto;
  background-color: #c2d8f0;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 2px #fff;
  color: #fff;
  cursor: pointer;
  line-height: 50px;
  font-size: 1em;
  font-weight: 600;
  text-align: center;

  &:hover {
    background: #908fe6;
  }
`;
const ModifyButton = styled.div`
  width: 100px;
  height: 50px;
  margin: 10px auto;
  background-color: #c2d8f0;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 2px #fff;
  color: #fff;
  cursor: pointer;
  line-height: 50px;
  font-size: 1em;
  font-weight: 600;
  text-align: center;

  &:hover {
    background: #908fe6;
  }
`;
const InputMessage = styled.input`
  margin-top: 10px;
  width: 498px;
  height: 40px;
  background: rgba(1, 1, 1, 0);
  border: none;
  border-bottom: 1px solid #ccc;
  color: #222;
  font-size: 1em;
  text-align: center;
  &::placeholder {
    color: #222;
  }
  &:focus {
    outline: none;
  }
`;
const InputMessageBar = styled.div`
  height: 1px;
  background: #fff;
  margin: 0 auto;
`;
const AddButton = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1em;
  font-weight: 600;
  background-color: #c2d8f0;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  margin: 10px auto 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #908fe6;
  }
`;

const DeleteButton = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  padding: 5px;
  line-height: 50px;
  background-color: #ccc;
  border: 1px solid #fff;
  border-left: 1px solid #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0px 0px 2px #fff;
`;

const ResultViewer = styled.div``;
const ResultViewerContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;
const ReadResultViewerDesc = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  width: 700px;
  margin-bottom: 50px;
  background-color: #fff;
  border-radius: 10px;
  color: #6c33e5;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 50px;
  padding: 5px;
  padding-left: 10px;
  text-align: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1600px) {
    width: 500px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 50px;
  }
`;
const ResultViewerDesc = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 50px;
  width: 700px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #fff;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: #6c33e5;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 50px;
  padding: 5px;
  padding-left: 10px;
  text-align: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1600px) {
    width: 500px;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 50px;
  }
`;
const H2 = styled.h2`
  margin: 30px auto 5px;
  width: 250px;
  height: 50px;
  line-height: 50px;
  background: #fff;
  border-radius: 10px;
  color: #908fe6;
  font-size: 1.5em;
`;
const InforamtionTextLayout = styled.div`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 50px;
  color: #908fe6;
  font-size: 0.8em;
  font-weight: 600;
`;
const ListInitButton = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 10px;
  background-color: #c2d8f0;
  border: none;
  border: 1px solid #fff;
  border-radius: 15px;
  color: #fff;
  font-weight: 600;
  &:hover {
    background-color: #908fe6;
  }
`;
const ScehuleTodoList = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const dispatch = useDispatch();
  const history = useNavigate();
  const inputMessageRef = useRef(null);
  const ResultViewerRef = useRef(null);

  const modifyMessageRef = useRef(null);
  const ResultViewerDescRef = useRef(null);

  const [readMode, setReadMode] = useState(false);
  const [listArray, setListArray] = useState([]);
  const [listMessage, setListMessage] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [confirmUpdatedMessage, setConfirmUpdatedMessage] = useState(false);

  const [modifyId, setModifyid] = useState();
  const [modifylistArray, setModifylistArray] = useState([]);
  const todolistFilterYear = useSelector(
    (state) => state.manager.todolistFilterYear
  );
  const todolistFilterDate = useSelector(
    (state) => state.manager.todolistFilterDate
  );
  const todolistFilterMonth = useSelector(
    (state) => state.manager.todolistFilterMonth
  );

  const cancelActionFunc = () => {
    dispatch(managerActions.setTodolistViewer(false));
    history(`/schedulelist`);
  };
  const setTempMessageFunc = () => {
    setListMessage(inputMessageRef.current.value);
  };
  const [count, setCount] = useState(0);
  const addTodoList = () => {
    setCount(count + 1);
    inputMessageRef.current.value = "";
    return setListArray((prev) => {
      return [
        ...prev,
        {
          id: count + 1,
          message: listMessage,
          filterYear: todolistFilterYear,
          filterMonth: todolistFilterMonth,
          filterDate: todolistFilterDate,
        },
      ];
    });
  };
  const executeFetchData = () => {
    fetch(`${PROXY}/addschedulelist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: localStorage.getItem("user"),
        scheduleList: listArray,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isLogged === "success") {
          localStorage.setItem("dataList", JSON.stringify(data));
        }
      });
  };
  const saveTodoList = () => {
    executeFetchData();
    dispatch(managerActions.setTodolistViewer(false));
    alert("Data is saved");
    history(`/schedulelist`);
    // window.location.reload();
  };

  const deleteTodoList = () => {
    let dataList = JSON.parse(localStorage.getItem("dataList"));
    const tempFunc = (v) => {
      //리스트 초기화를 위해서
      if (
        v.filter_year === todolistFilterYear &&
        v.filter_month === todolistFilterMonth &&
        v.filter_date === todolistFilterDate
      ) {
        fetch(`${PROXY}/update-schedulelist/${v.id}`, {
          method: "DELETE",
        }).then((res) => res.json());

        history(`/schedulelist`);
      }
    };
    dataList.map((v) => tempFunc(v));
  };

  const modifyActionFunc = (id) => {
    let dataList = JSON.parse(localStorage.getItem("dataList"));
    const tempFunc = (v) => {
      if (
        v.filter_year === todolistFilterYear &&
        v.filter_month === todolistFilterMonth &&
        v.filter_date === todolistFilterDate
      ) {
        setUpdateMode(true);
        modifyMessageRef.current.contentEditable = "true";
        modifyMessageRef.current.focus();
      }
    };
    dataList.map((v) => tempFunc(v));
  };
  const onModifyMessageAcitonFunc = (id) => {
    setModifyid(id);
  };
  const modifyTodoList = () => {
    setConfirmUpdatedMessage(true);
    return setModifylistArray((prev) => {
      return [
        {
          message: modifyMessageRef.current.textContent,
          filterYear: todolistFilterYear,
          filterMonth: todolistFilterMonth,
          filterDate: todolistFilterDate,
        },
      ];
    });
  };

  const modifyFetchData = () => {
    fetch(`${PROXY}/update-schedulelist/${modifyId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: localStorage.getItem("user"),
        scheduleList: modifylistArray,
      }),
    }).then((res) => res.json());
    localStorage.setItem("dataReloading", "true");
  };
  const modifySaveFunc = () => {
    modifyFetchData();
    let reloading = localStorage.getItem("dataReloading");
    if (reloading) {
      alert("수정완료");
    }

    history(`/schedulelist`);
  };
  const deleteMode = (id) => {
    //임시 데이터배열에서 개별 제거 위해서
    setListArray(
      listArray.filter((v) => {
        return v.id !== id;
      })
    );
  };
  const executeTodoList = () => {
    return listArray.map((value, idx) => {
      return (
        <div key={value.id}>
          <ResultViewerContainer>
            <ResultViewerDesc ref={ResultViewerDescRef}>
              {value.message}
            </ResultViewerDesc>

            <DeleteButton onClick={() => deleteMode(value.id)}>
              Delete
            </DeleteButton>
          </ResultViewerContainer>
        </div>
      );
    });
  };
  const readModeTodoList = () => {
    const dataList = JSON.parse(localStorage.getItem("dataList"));
    const tempFunc = (v, idx) => {
      if (
        v.filter_year === todolistFilterYear &&
        v.filter_month === todolistFilterMonth &&
        v.filter_date === todolistFilterDate
      ) {
        return (
          <div key={idx}>
            <ResultViewerContainer>
              <ReadResultViewerDesc ref={modifyMessageRef}>
                {v.list_description}
              </ReadResultViewerDesc>
            </ResultViewerContainer>
          </div>
        );
      }
    };
    return dataList.map((v, idx) => tempFunc(v, idx));
  };
  const initSchduleManager = useCallback(
    (v) => {
      if (
        v.filter_year === todolistFilterYear &&
        v.filter_month === todolistFilterMonth &&
        v.filter_date === todolistFilterDate
      ) {
        setReadMode(true);
        onModifyMessageAcitonFunc(v.id);
      } else if (
        todolistFilterYear === 0 &&
        todolistFilterMonth === 0 &&
        todolistFilterDate === 0
      ) {
        //임의적으로 리로드시

        history(`/schedulelist`);
      }
    },
    [todolistFilterYear, todolistFilterMonth, todolistFilterDate, history]
  );
  useEffect(() => {
    const dataList = JSON.parse(localStorage.getItem("dataList"));
    dataList.map((v) => initSchduleManager(v));
  }, [initSchduleManager]);
  return (
    <>
      <ScehuleTodoListLayout>
        <ScehuleTodoListLayoutContainer>
          <TodoListManagerContainer>
            <IsSavedContainer>
              {readMode === true && (
                <>
                  <InforamtionTextLayout>
                    <H2>Read_Mode</H2>
                    &#x23;스케쥴 리스트 초기화를 원하신다면 ?
                    <ListInitButton onClick={deleteTodoList}>
                      List 초기화
                    </ListInitButton>
                    <CloseButton onClick={cancelActionFunc}>Cancel</CloseButton>
                    {updateMode === false ? (
                      <CloseButton onClick={modifyActionFunc}>
                        Modify
                      </CloseButton>
                    ) : (
                      <>
                        {confirmUpdatedMessage === false ? (
                          <CloseButton onClick={modifyTodoList}>
                            수정 완료
                          </CloseButton>
                        ) : (
                          <ModifyButton onClick={modifySaveFunc}>
                            Save
                          </ModifyButton>
                        )}
                      </>
                    )}
                  </InforamtionTextLayout>
                </>
              )}
            </IsSavedContainer>
            {readMode === false ? (
              <>
                <H2>Write_Mode</H2>
                <IsSavedContainer>
                  <SaveButton onClick={saveTodoList}>Save</SaveButton>
                  <CloseButton onClick={cancelActionFunc}>Cancel</CloseButton>
                </IsSavedContainer>
              </>
            ) : (
              ""
            )}
            {readMode === false ? (
              <>
                <InputMessage
                  type="text"
                  ref={inputMessageRef}
                  onChange={() => setTempMessageFunc()}
                  placeholder="내용을 입력하세요"
                />
                <InputMessageBar />
                <AddButton onClick={addTodoList}>Add</AddButton>
              </>
            ) : (
              ""
            )}
          </TodoListManagerContainer>

          <ResultViewer ref={ResultViewerRef}>
            {readMode === false ? executeTodoList() : readModeTodoList()}
          </ResultViewer>
        </ScehuleTodoListLayoutContainer>
      </ScehuleTodoListLayout>
    </>
  );
};
export default ScehuleTodoList;
