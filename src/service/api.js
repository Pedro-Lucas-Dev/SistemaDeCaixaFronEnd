import axios from "axios";

const BASE_URL = "https://backend-sistemacaixa.herokuapp.com";

const signUp = (data) => {
  const body = {
    fistName: data.fistName,
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

export { signUp, signIn };
