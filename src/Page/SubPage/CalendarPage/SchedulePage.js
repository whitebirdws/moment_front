import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { managerActions } from "../../../store";

import {
  SchedulePageContainer,
  SchedulePageTitle,
  SchedulePageSubContainer,
  Input,
  Select,
  Span,
  MenuSection,
  Thead,
  TheadUl,
  TheadList,
  Tbody,
  TbodyUl,
  TbodyList,
} from "./style/Style_Calendar";
import { Link } from "react-router-dom";

const SchedulePage = () => {
  const dispatch = useDispatch();
  const date = new Date();
  let thisYear = date.getFullYear();
  let thisMonth = date.getMonth() + 1;

  const monthRef = useRef(null);

  const [yearValue, setYearValue] = useState(thisYear);
  const [monthValue, setMonthValue] = useState(thisMonth);
  const [calendarView, setCalendarView] = useState();
  const [testm, setTestm] = useState([]);
  const initData = useCallback(() => {
    fetch("/research-schedulelist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: localStorage.getItem("user"),
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        setTestm(data.result);
        localStorage.setItem("dataList", JSON.stringify(data.result));
      });
  }, []);
  const executeTodolistViewer = useCallback(
    (numberInfo) => {
      dispatch(managerActions.setTodolistViewer(true));
      dispatch(managerActions.setTodolistFilterYear(yearValue));
      dispatch(managerActions.setTodolistFilterMonth(monthValue));
      dispatch(managerActions.setTodolistFilterDate(numberInfo));
    },
    [dispatch, monthValue, yearValue]
  );

  const calculateDay = useCallback(() => {
    let recordCalendar = [];
    //지난달 일자
    const previousMonth = new Date(yearValue, monthValue - 1, 0);

    //지난달 마지막요일
    const previousMonthLastDay = previousMonth.getDay();
    //이번달 일자

    const thisMonthLastDate = new Date(yearValue, monthValue, 0);
    //이번달 마지막 일자

    const thisMonthLastDay = thisMonthLastDate.getDate();

    for (let i = 0; i <= previousMonthLastDay; i++) {
      recordCalendar.push(" ");
    }
    for (let i = 0; i < thisMonthLastDay; i++) {
      recordCalendar.push(i + 1);
    }
    let res;
    let newList = recordCalendar.slice();
    const executeList = (val) => {
      const tempFunc = (value, val) => {
        if (
          value.filter_year === yearValue &&
          value.filter_month === monthValue &&
          value.filter_date === val
        ) {
          return value.list_description;
        }
      };
      return testm.map((value, id) => tempFunc(value, val));
    };
    if (newList.length > 0) {
      res = newList.map((val, idx) => {
        return (
          <div key={idx}>
            <Link to="/todolist">
              <TbodyList onClick={() => executeTodolistViewer(val)}>
                {val}

                <br />
                {executeList(val)}
              </TbodyList>
            </Link>
          </div>
        );
      });

      setCalendarView(res);
    }
  }, [executeTodolistViewer, monthValue, yearValue, testm]);

  const changeCalendarLeft = () => {
    setMonthValue(Number(monthValue) - 1);
    monthRef.current.value = Number(monthValue) - 1;

    if (monthValue === 0) {
      setMonthValue(12);
      setYearValue(yearValue - 1);
    }
    if (monthRef.current.value === "") {
      setMonthValue(12);
      setYearValue(yearValue - 1);
    }
  };
  const changeCalendar = () => {
    setMonthValue(parseInt(monthRef.current.value));
  };
  const changeCalendarRight = () => {
    setMonthValue(Number(monthValue) + 1);
    monthRef.current.value = Number(monthValue) + 1;

    if (monthValue === 13) {
      setMonthValue(1);
      setYearValue(yearValue + 1);
    }
    if (monthRef.current.value === "") {
      setMonthValue(1);
      setYearValue(yearValue + 1);
    }
  };
  const calendarReload = () => {
    // window.location.reload();
  };
  useEffect(() => {
    // calculateDay();
    initData();
  }, [initData]);

  useEffect(() => {
    let reloading = localStorage.getItem("dataReloading");
    if (reloading) {
      localStorage.removeItem("dataReloading");
    }
    monthRef.current.value = monthValue;
    calculateDay();
  }, [calculateDay, monthValue]);

  return (
    <>
      <SchedulePageContainer>
        <SchedulePageTitle onClick={calendarReload}>Calendar</SchedulePageTitle>

        <SchedulePageSubContainer>
          <MenuSection>
            <Input
              type="button"
              id="left-button"
              value="<"
              onClick={() => changeCalendarLeft(-1)}
            />
            <Input
              type="button"
              id="right-button"
              value=">"
              onClick={() => changeCalendarRight(1)}
            />
            <Span>{yearValue}년</Span>
            <Select
              type="number"
              id="month"
              ref={monthRef}
              onChange={() => changeCalendar()}
            >
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </Select>
          </MenuSection>

          <Thead className="thead">
            <TheadUl>
              <TheadList>일</TheadList>
              <TheadList>월</TheadList>
              <TheadList>화</TheadList>
              <TheadList>수</TheadList>
              <TheadList>목</TheadList>
              <TheadList>금</TheadList>
              <TheadList>토</TheadList>
            </TheadUl>
          </Thead>
          <Tbody>
            <TbodyUl>{calendarView}</TbodyUl>
          </Tbody>
        </SchedulePageSubContainer>
      </SchedulePageContainer>
    </>
  );
};

export default SchedulePage;
