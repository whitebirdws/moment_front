import { createSlice, configureStore } from "@reduxjs/toolkit";
const loginInitialState = {
  userId: "",
};

const initialState = {
  loginFlag: false,
  dragData: "",
  titleName: "",
  names: [],
  viewData: false,
  addData: false,
  targetId: 0,
  todolistViewer: false,
  todolistData: [],
  todolistFilterYear: 0,
  todolistFilterMonth: 0,
  todolistFilterDate: 0,
  TextAreaRef: "",
  updateTodoList: [],
};
const loginManagerSlice = createSlice({
  name: "loginManager",
  initialState: loginInitialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});
const managerSlice = createSlice({
  name: "manager",
  initialState: initialState,
  reducers: {
    setLoginFlag(state, action) {
      state.loginFlag = action.payload;
    },
    setDragData(state, action) {
      state.dragData = action.payload;
    },
    setTitleName(state, action) {
      state.titleName = action.payload;
    },
    setNames(state, action) {
      state.names = action.payload;
    },
    setViewData(state, action) {
      state.viewData = action.payload;
    },
    setAddData(state, action) {
      state.addData = action.payload;
    },
    setTargetId(state, action) {
      state.targetId = action.payload;
    },
    setTodolistViewer(state, action) {
      state.todolistViewer = action.payload;
    },
    setTodolistData(state, action) {
      state.todolistData = action.payload;
    },
    setTodolistFilterYear(state, action) {
      state.todolistFilterYear = action.payload;
    },
    setTodolistFilterMonth(state, action) {
      state.todolistFilterMonth = action.payload;
    },
    setTodolistFilterDate(state, action) {
      state.todolistFilterDate = action.payload;
    },
    setTextAreaRef(state, action) {
      state.TextAreaRef = action.payload;
    },
    setUpdateTodoList(state, action) {
      state.updateTodoList = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    manager: managerSlice.reducer,
    loginManager: loginManagerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const managerActions = managerSlice.actions;
export const loginManagerActions = loginManagerSlice.actions;
export default store;
