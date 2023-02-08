import axios from "axios";

const BASE_URL = "http://5.202.179.236:8282/api/PolProductsNo/get";

const productsAPI = async () => {
  const specialUrl = BASE_URL + "?skip=0&take=10&showInMainPage=true";

  const config = {
    method: "get",
    url: specialUrl,
    headers: {
      apptype: "b2b",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIxIiwidXNlcm5hbWUiOiJlYTM0NTFjNC1lYWZiLTRlMDUtODYyNS00ODc0NWU4NWFiZDMiLCJ1c2Vya2V5IjoiMDkxMjA1MzIxMjYiLCJhbGlhcyI6Itiz2b7Zh9ixINiz2b7Zh9ixIiwibmJmIjoxNjc1Njc2NTMzLCJleHAiOjE2NzgwOTU3MzMsImlhdCI6MTY3NTY3NjUzMywiaXNzIjoiaHR0cDovLzc3LjIzOC4xMjMuMTA6MTIzNjciLCJhdWQiOiJhcHBVc2VyIn0.IPYe0bHD09oRS5uaLqVeN_Ejsx2KCOlGyU-hrZ0-Fr0",
      language: "fa",
      connection: "keep-alive",
      "x-requested-with": "XMLHttpRequest",
    },
  };
  const response = await axios(config);
  return response.data;
};

export { productsAPI };
