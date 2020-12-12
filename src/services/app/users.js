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
  let avatarName = displayName.replaceAll(" ", "_");
  formData.append("file", file, `${avatarName}.jpg`);

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

const sendEmail = (email) => {
  return axios({
    method: "post",
    url: `${endpointBase}/password/recover`,
    data: {
      email,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

const sendCode = (email, code) => {
  return axios({
    method: "get",
    url: `${endpointBase}/password/code`,
    params: {
      email,
      code,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

const changePassword = (email, password) => {
  console.log(email, password);
  return axios({
    method: "put",
    url: `${endpointBase}/password/reset`,
    data: {
      email,
      password,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

//SETTINGS

const changeAvatar = (file, user) => {
  let formData = new FormData();
  let avatarName = user.displayName.replaceAll(" ", "_");
  formData.append("file", file, `${avatarName}.jpg`);

  return axios({
    method: "put",
    url: `${endpointBase}/user/edit/avatar`,
    data: formData,
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "bearer " + user.token,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

const changeDisplayname = (displayName, user)=>{
	return axios({
		method:'put',
		url:`${endpointBase}/user/edit/displayName`,
		params:{
			displayName
		},
		headers:{'content-type':'multipart/form-data','Authorization': "bearer " + user.token}
	})
	.then((response) => {return response})
	.catch((err) => {return err.response})
};
export {
  login,
  singup,
  logout,
  loginFb,
  sendEmail,
  sendCode,
  changePassword,
  changeAvatar,
  changeDisplayname
};
