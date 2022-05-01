import React, { useState, useRef, useEffect, useCallback } from "react";

import {
  DailyRecordContainer,
  DailyRecordLinkbox,
  DailyRecordRemoveBox,
  DailyRecordModifyBox,
  DailyRecordSaveBox,
  DailyRecordCancelBox,
  ViewDescArea,
  ViewDescText,
  ViewTitleSection,
  ViewTextLi,
} from "./style/Style_DailyRecord";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DailyRecord = () => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const history = useNavigate();
  const viewTitleRef = useRef(null);
  const viewTextRef = useRef(null);
  const modifyNames = useSelector((state) => state.manager.names);
  const targetId = useSelector((state) => state.manager.targetId);
  const [editorsAuthority, setEditorsAuthority] = useState(false);
  const [tempArr, setTempArr] = useState([]);
  const linkBoxRef = useRef(null);
  const viewDescRef = useRef(null);

  const reloadLink = () => {
    history(`/readrecord`);
  };

  const removeData = (id) => {
    fetch(`${PROXY}/daily-records/${id}`, {
      method: "DELETE",
    });
    localStorage.setItem("delete_tempReLoading", "delete_tempReLoading");

    history(`/readrecord`);
    alert("Data is deleted");
  };

  const modifyData = (id) => {
    setEditorsAuthority(true);
  };

  const cancleData = () => {
    setEditorsAuthority(false);
  };

  const saveData = (id) => {
    const titleResult = viewTitleRef.current.innerHTML;
    const textValue = viewTextRef.current.innerHTML;
    setEditorsAuthority(false);
    fetch(`${PROXY}/daily-records/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleResult,
        text: textValue,
      }),
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const filterRecordView = useCallback(() => {
    function tempFunc(value) {
      if (value.id === targetId) {
        setTempArr(value);
        localStorage.setItem("tempArr", JSON.stringify(value));
      }
    }
    modifyNames.map((value, idx) => tempFunc(value));
  }, [modifyNames, targetId]);
  const recordView = () => {
    let tempArr2 = [];
    tempArr2 = JSON.parse(localStorage.getItem("tempArr"));
    return (
      <div key={tempArr2.id}>
        <ViewDescArea ref={viewDescRef}>
          <ViewDescText>
            {tempArr2.write_user === Number(localStorage.getItem("user")) && (
              <>
                {editorsAuthority === false ? (
                  <>
                    <DailyRecordRemoveBox
                      onClick={() => removeData(tempArr2.id)}
                    >
                      Del
                    </DailyRecordRemoveBox>
                    <DailyRecordModifyBox
                      onClick={() => modifyData(tempArr2.id)}
                    >
                      Modify
                    </DailyRecordModifyBox>
                  </>
                ) : (
                  <>
                    <DailyRecordSaveBox onClick={() => saveData(tempArr2.id)}>
                      Save
                    </DailyRecordSaveBox>
                    <DailyRecordCancelBox onClick={cancleData}>
                      Cancel
                    </DailyRecordCancelBox>
                  </>
                )}
              </>
            )}

            <ViewTitleSection
              className="viewTitle"
              ref={viewTitleRef}
              contentEditable={editorsAuthority}
            >
              {tempArr2.title}
            </ViewTitleSection>
            <ul>
              <ViewTextLi
                className="viewText"
                ref={viewTextRef}
                contentEditable={editorsAuthority}
                dangerouslySetInnerHTML={{ __html: tempArr2.text }}
              ></ViewTextLi>
            </ul>
          </ViewDescText>
        </ViewDescArea>
      </div>
    );
  };
  const recordView2 = () => {
    let tempArr2 = tempArr;

    return (
      <div key={tempArr2.id}>
        <ViewDescArea ref={viewDescRef}>
          <ViewDescText>
            {tempArr2.write_user === Number(localStorage.getItem("user")) && (
              <>
                {editorsAuthority === false ? (
                  <>
                    <DailyRecordRemoveBox
                      onClick={() => removeData(tempArr2.id)}
                    >
                      Del
                    </DailyRecordRemoveBox>
                    <DailyRecordModifyBox
                      onClick={() => modifyData(tempArr2.id)}
                    >
                      Modify
                    </DailyRecordModifyBox>
                  </>
                ) : (
                  <>
                    <DailyRecordSaveBox onClick={() => saveData(tempArr2.id)}>
                      Save
                    </DailyRecordSaveBox>
                    <DailyRecordCancelBox onClick={cancleData}>
                      Cancel
                    </DailyRecordCancelBox>
                  </>
                )}
              </>
            )}

            <ViewTitleSection
              className="viewTitle"
              ref={viewTitleRef}
              contentEditable={editorsAuthority}
            >
              {tempArr2.title}
            </ViewTitleSection>
            <ul>
              <ViewTextLi
                className="viewText"
                ref={viewTextRef}
                contentEditable={editorsAuthority}
                dangerouslySetInnerHTML={{ __html: tempArr2.text }}
              ></ViewTextLi>
            </ul>
          </ViewDescText>
        </ViewDescArea>
      </div>
    );
  };

  useEffect(() => {
    localStorage.setItem("tempId", targetId);
    filterRecordView();
  }, [targetId, filterRecordView]);

  return (
    <DailyRecordContainer>
      <DailyRecordLinkbox ref={linkBoxRef} onClick={reloadLink}>
        Home
      </DailyRecordLinkbox>

      <form onSubmit={onSubmit}>
        {localStorage.getItem("tempArr") ? recordView() : recordView2()}
      </form>
    </DailyRecordContainer>
  );
};

export default DailyRecord;
