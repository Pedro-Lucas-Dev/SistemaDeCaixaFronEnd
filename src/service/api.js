import axios from "axios";

const BASE_URL = "https://backend-sistemacaixa.herokuapp.com";

const token = localStorage.getItem("@SuaAplicacao:JWT_TOKEN");
const requestAuthenticated = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${token}` },
});

const signUp = (data) => {
  const body = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    permissionLevel: 1,
  };
  return axios.post(`${BASE_URL}/users`, body);
};
const signIn = (userLogin) => {
  const user = {
    email: userLogin.email,
    password: userLogin.password,
  };

  return axios.post(`${BASE_URL}/auth`, user);
};

const loggedUser = () => {
  return requestAuthenticated.get(`${BASE_URL}/me`);
};

export { signUp, signIn, loggedUser };
