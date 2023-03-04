import axios from "axios";
import jwt_decode from "jwt-decode";

const productsAPI = async (params) => {
  const specialUrl = "http://5.202.179.236:8282/api/PolProductsNo/get";

  const config = {
    method: "get",
    url: specialUrl,
    headers: {
      apptype: "b2b",
      authorization: "Bearer " + localStorage.getItem("token"),
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    params: { ...params, CustomerId: localStorage.getItem("CustomerId") },
  };
  const response = await axios(config);
  return response.data;
};

const loginByCode = async (body) => {
  const loginUrl = "http://5.202.179.236:8282/api/poluser/signin";

  const config = {
    method: "post",
    url: loginUrl,
    headers: {
      apptype: "b2b",
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    data: body,
  };
  const response = await axios(config);
  return response.data;
};
const requestCode = async (body) => {
  const codeUrl = "http://5.202.179.236:8282/api/poluser/requestcode";

  const config = {
    method: "post",
    url: codeUrl,
    headers: {
      apptype: "b2b",
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    data: body,
  };
  const response = await axios(config);
  return response.data;
};

const getUserInfo = async () => {
  const codeUrl = "http://5.202.179.236:8282/api/poluser/userinfo";
  const userId = jwt_decode(localStorage.getItem("token"));
  const config = {
    method: "get",
    url: codeUrl,
    headers: {
      apptype: "b2b",
      language: "fa",
      authorization: "Bearer " + localStorage.getItem("token"),
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    params: { id: userId.id },
  };
  const response = await axios(config);
  return response.data;
};

export { productsAPI, loginByCode, requestCode, getUserInfo };
