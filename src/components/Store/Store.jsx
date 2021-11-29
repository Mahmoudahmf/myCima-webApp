import { createStore } from "redux";
import { login } from "../services/Auth";

let token = localStorage.getItem("token");

let initState = {
  token: token,
  errorMessage: "",
};

let actionFunc = (prevState = initState, action) => {
  if (action.type === "login") {
    login({
      email: action.payload.email,
      password: action.payload.password,
    }).then((response) => {
      console.log("login: ", response);
      return  {
        token: response.token,
        errorMessage: response.message
      }
    });
  }
  return prevState;
};

let store = createStore(actionFunc);

export default store;
