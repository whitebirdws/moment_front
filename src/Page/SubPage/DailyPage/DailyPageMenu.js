import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import {
  LAYOUT_BOX02_2_DAILY_PAGE,
  LAYOUT_BOX03_DAILY_PAGE,
  MenuUl,
  MenuLi,
  MenuTitle,
  SaveButton,
  TextArea,
  EditSubGroupSection,
  EditTitleSubLayout,
  EditTitle,
} from "./style/Style_DailyPages";
import { managerActions } from "../../../store";

const Selectbox = styled.div`
  color: #ccc;
  display: flex;
`;
const FontSelectbox01 = styled.div`
  width: 100px;
  text-align: center;
  border-radius: 15px;
`;
const FontSelectbox02 = styled.div`
  width: 100px;
  text-align: center;
  margin-left: 20px;
`;
const FontSizeBox = styled.div`
  border: 1px solid #222;
  border-radius: 5px;
  color: #222;
  padding: 3px;
  cursor: pointer;
`;

const Psection = styled.div`
  position: relative;
  height: 25px;
  line-height: 25px;
  color: #222;
  margin-top: 1px;

  border-radius: 5px;
  border: 1px solid #222;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    color: gold;
  }
  animation: fontSlider 0.3s ease-in-out 1;
  @keyframes fontSlider {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(30%);
    }
  }
`;
const Psection2 = styled.div`
  position: relative;
  height: 25px;
  line-height: 25px;
  color: #222;
  margin-top: 1px;

  border-radius: 5px;
  border: 1px solid #222;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    color: gold;
  }
  animation: fontSlider 0.3s ease-in-out 1;
  @keyframes fontSlider {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(30%);
    }
  }
`;
const FontStyleUl = styled.ul`
  display: flex;
`;
const FontStyleLi = styled.li``;

const fontStyle = {
  fontColorTitle() {
    let fontTitleArr = [
      {
        id: 1,
        title: "_Black",
      },
      {
        id: 2,
        title: "_Blue",
      },
      {
        id: 3,
        title: "_Red",
      },
    ];
    return fontTitleArr;
  },
  data() {
    let arr = [
      {
        id: 1,
        title: "_Big",
      },
      {
        id: 2,

        title: "_Middle",
      },
      {
        id: 3,
        title: "_Little",
      },
    ];

    return arr;
  },
};

const DailyPageMenu = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const dispatch = useDispatch();
  const EditTitleRef = useRef(null);
  const TextAreaRef = useRef(null);
  const dragData = useSelector((state) => state.manager.dragData);
  const titleName = useSelector((state) => state.manager.titleName);

  const setViewDataActionFunc = (flag) => {
    dispatch(managerActions.setViewData(flag));
  };
  const BoxLayout02Ref = useRef(null);
  const FontSizeMenuRef = useRef(null);
  const FontSizeMenuRef02 = useRef(null);

  const contolFontMenu = (flagType) => {
    if (flagType === true) {
      FontSizeMenuRef.current.classList.add("active");
      FontSizeMenuRef02.current.classList.add("active");
      BoxLayout02Ref.current.classList.add("active");
    } else {
      FontSizeMenuRef.current.classList.remove("active");
      FontSizeMenuRef02.current.classList.remove("active");
      BoxLayout02Ref.current.classList.remove("active");
    }
  };

  const [fontFlag, setFontFlag] = useState(false);
  const [fontFlag02, setFontFlag02] = useState(false);

  const modifyFontSizeMenu = () => {
    setFontFlag(!fontFlag);
    contolFontMenu(!fontFlag);
  };
  const modifyFontStyleMenu = () => {
    setFontFlag02(!fontFlag02);
    contolFontMenu(!fontFlag02);
  };
  const modifyFontSize = (e) => {
    if (TextAreaRef.current.innerHTML !== "") {
      const selectBoxName = e.currentTarget.innerText;
      const node = document.createElement("span");

      switch (selectBoxName) {
        case "_Big":
          node.innerText = dragData;

          node.style.fontSize = "32px";
          dragData.deleteContents();
          dragData.insertNode(node);

          break;
        case "_Middle":
          node.innerText = dragData;
          node.style.fontSize = "22px";
          dragData.deleteContents();
          dragData.insertNode(node);

          break;
        case "_Little":
          node.innerText = dragData;
          node.style.fontSize = "14px";
          dragData.deleteContents();
          dragData.insertNode(node);

          break;
        case "_Black":
          node.innerText = dragData;
          node.style.color = "#222";

          dragData.deleteContents();
          dragData.insertNode(node);

          break;
        case "_Blue":
          node.innerText = dragData;
          node.style.color = "#3784F6";

          dragData.deleteContents();
          dragData.insertNode(node);

          break;
        case "_Red":
          node.innerText = dragData;
          node.style.color = "#F48015";

          dragData.deleteContents();
          dragData.insertNode(node);
          break;
        default:
      }
    } else {
      alert("내용을 먼저 입력하세요");
    }
  };
  const excuteFetchData = (titleResult, textResult) => {
    fetch(`${PROXY}/add-dailyrecords`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        user: localStorage.getItem("loginUserName"),
        title: titleResult,
        text: textResult,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isLogged === "success") {
          setViewDataActionFunc(true);
          localStorage.setItem("guide", "success");
          localStorage.setItem("isSaved", "success");
          alert("Data is saved");
          EditTitleRef.current.value = "";
          TextAreaRef.current.innerHTML = "";
        } else {
          alert("Data is not saved");
          localStorage.setItem("isSaved", "failure");
        }
      })
      .catch((err) => console.error(err));
  };
  const onClickSave = () => {
    const titleResult = titleName;
    const textResult = TextAreaRef.current.innerHTML;

    if (textResult === "" || titleResult === "") {
      const timerSet = setTimeout(() => {
        alert("내용을 입력하세요");
        clearTimeout(timerSet);
      }, 100);
    }
    if (titleResult !== "" && textResult !== "") {
      excuteFetchData(titleResult, textResult);
    }
  };
  const saveDragData = () => {
    const selection = window.getSelection();
    const selected = selection.getRangeAt(0);
    dispatch(managerActions.setDragData(selected));
  };
  const enterBtn = () => {
    if (window.event.keyCode === 13) {
      TextAreaRef.current.focus(); //다음요소로 focus를 옮깁니다.
    }
  };
  const savingTitle = () => {
    dispatch(managerActions.setTitleName(EditTitleRef.current.value));
  };

  const menuUl = () => {
    return (
      <MenuUl>
        <MenuLi>
          <MenuTitle> Write_Your_Daily</MenuTitle>
        </MenuLi>
        <MenuLi>
          <Selectbox>
            <FontStyleUl>
              <FontStyleLi>
                <FontSelectbox01>
                  <FontSizeBox onClick={modifyFontSizeMenu}>
                    FontSize
                  </FontSizeBox>
                  <div className="fontsizeEvent" ref={FontSizeMenuRef}>
                    {fontStyle.data().map((fontValue, index) => {
                      return (
                        <Psection
                          key={fontValue.id}
                          onClick={(e) => modifyFontSize(e)}
                        >
                          {fontValue.title}
                        </Psection>
                      );
                    })}
                  </div>
                </FontSelectbox01>
              </FontStyleLi>
              <FontStyleLi>
                <FontSelectbox02>
                  <FontSizeBox onClick={modifyFontStyleMenu}>
                    Font_Color
                  </FontSizeBox>
                  <div className="fontsizeEvent02" ref={FontSizeMenuRef02}>
                    {fontStyle.fontColorTitle().map((value, index) => {
                      return (
                        <Psection2
                          key={value.id}
                          onClick={(e) => modifyFontSize(e)}
                        >
                          {value.title}
                        </Psection2>
                      );
                    })}
                  </div>
                </FontSelectbox02>
              </FontStyleLi>
            </FontStyleUl>
          </Selectbox>
        </MenuLi>
        <MenuLi>
          <SaveButton onClick={onClickSave}>Save</SaveButton>
        </MenuLi>
      </MenuUl>
    );
  };

  return (
    <div>
      <>
        <div>
          <LAYOUT_BOX02_2_DAILY_PAGE
            ref={BoxLayout02Ref}
            className="BoxLayout02"
          >
            {menuUl()}
          </LAYOUT_BOX02_2_DAILY_PAGE>
        </div>

        <LAYOUT_BOX03_DAILY_PAGE>
          <EditSubGroupSection>
            <EditTitleSubLayout>Title</EditTitleSubLayout>
            <EditTitle
              ref={EditTitleRef}
              type="text"
              onKeyUp={savingTitle}
            ></EditTitle>
          </EditSubGroupSection>
          <TextArea
            onClick={saveDragData}
            ref={TextAreaRef}
            contentEditable="true"
            onKeyUp={enterBtn}
          />
        </LAYOUT_BOX03_DAILY_PAGE>
      </>
    </div>
  );
};
export default DailyPageMenu;
