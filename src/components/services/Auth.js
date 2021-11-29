import axios from "axios";
const SUCESS_MSG = "success";

export const login = async ({ email, password }) => {
  let { data } = await axios.post(
    "https://route-egypt-api.herokuapp.com/signin",
    {
      email,
      password,
    }
  );

  if (data.message === SUCESS_MSG) {
    localStorage.setItem("token", data.token);
  }

  return data;
};
