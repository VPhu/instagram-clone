import Cookies from "js-cookie";

export const setToken = (token) => {
  Cookies.set("token", token, { expires: 7, path: "/" });
};

export const getToken = () => {
  return Cookies.get("token");
};

export const removeToken = (token) => {
  Cookies.remove("token", { path: "/" });
};
