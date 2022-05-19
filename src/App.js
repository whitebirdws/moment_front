import AlarmPage from "./Page/SubPage/DailyPage/AlarmPage";
import ContentsPage from "./Page/ParentPage/ContensPage/ContentsPage";
import ContentsPage01 from "./Page/ParentPage/ContensPage/ContentsPage01";
import ContentsPage02 from "./Page/ParentPage/ContensPage/ContentsPage02";
import ContentsPage03 from "./Page/ParentPage/ContensPage/ContentsPage03";
import MainPage from "./Page/ParentPage/MainPage";
import LoginManager from "./Page/LoginPage/LoginManager";
import RecordManager from "./Page/ParentPage/ContensPage/RecordManager";
import SignUpPage from "./Page/LoginPage/SignUpPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const filterId = useSelector((state) => state.manager.targetId);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginManager />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/writerecord" element={<ContentsPage />} />
        <Route path="/readrecord" element={<ContentsPage01 />} />
        <Route
          path={`/recordmanager/:${filterId}`}
          element={<RecordManager />}
        />
        <Route path="/schedulelist" element={<ContentsPage02 />} />
        <Route path="/todolist" element={<ContentsPage03 />} />
      </Routes>
    </div>
  );
}

export default App;
