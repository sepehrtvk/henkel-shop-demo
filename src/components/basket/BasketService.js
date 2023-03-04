import axios from "axios";

const postBasket = async (data) => {
  const BASE_URL = "http://5.202.179.236:8282/api/BasketPolNo/Post";
  const config = {
    method: "post",
    url: BASE_URL,
    headers: {
      apptype: "b2b",
      authorization: "Bearer " + localStorage.getItem("token"),
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    data: data,
  };
  return axios(config);
};

const getBasket = async (params) => {
  const BASE_URL = "http://5.202.179.236:8282/api/BasketPolNo/Get";
  const config = {
    method: "get",
    url: BASE_URL,
    headers: {
      apptype: "b2b",
      authorization: "Bearer " + localStorage.getItem("token"),
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    params: params,
  };
  return axios(config);
};

const getBasketFullData = async (params) => {
  const BASE_URL =
    "http://5.202.179.236:8282/api/BasketPolNo/GetBasketFullData";
  const config = {
    method: "get",
    url: BASE_URL,
    headers: {
      apptype: "b2b",
      authorization: "Bearer " + localStorage.getItem("token"),
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    params: params,
  };
  return axios(config);
};

const checkout = async (body) => {
  const BASE_URL = "http://5.202.179.236:8282/api/BasketPolNo/CheckOut";
  const config = {
    method: "post",
    url: BASE_URL,
    headers: {
      apptype: "b2b",
      authorization: "Bearer " + localStorage.getItem("token"),
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
    data: body,
  };
  return axios(config);
};

export { postBasket, getBasket, getBasketFullData, checkout };
