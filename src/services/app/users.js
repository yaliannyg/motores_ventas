// import Api from "@/services/api";
import axios from "axios";
import endpointBase from "@/configuration/endPoint";

const login = (email, password) => {
  // return Api.post('/login/normal', { email, password });
  return axios({
    method: "post",
    url: `${endpointBase}/login/normal`,
    data: { email, password },
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
const singup = (displayName, email, password, file) => {
  let formData = new FormData();
  formData.append("displayName", displayName);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("file", file, `${displayName}.jpg`);

  console.log("kdkadkd");
  return axios({
    method: "post",
    url: `${endpointBase}/signup`,
    data: formData,
    headers: { "content-type": "multipart/form-data" },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      return err.response;
    });
};

const logout = (token) => {
  return axios({
    method: "put",
    url: `${endpointBase}/logout`,
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "bearer " + token,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

const loginFb = (email, displayName, avatar) => {
  return axios({
    method: "post",
    url: `${endpointBase}/login/facebook`,
    data: {
      email,
      displayName,
      avatar,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export { login, singup, logout, loginFb };
