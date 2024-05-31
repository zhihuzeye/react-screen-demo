import { Middleware } from "redux";

export const recordLogs: Middleware = (store) => (next) => (action) => {
  // console.log("logs state 更新后", store.getState());
  // console.log("logs action ", action);
  next(action);
  // console.log("logs state 更新前", store.getState());
};
