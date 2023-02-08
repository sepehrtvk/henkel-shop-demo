import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Icons

import noImage from "../../assets/img/no-image.jpeg";
//Styles
import styles from "./Categories.module.css";

const BASE_URL = "http://5.202.179.236:8282/api/PolProductGroupsNo/get";

const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);
  React.useEffect(() => {
    const getCategories = async () => {
      const config = {
        method: "get",
        url: BASE_URL,
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
      setCategories(response.data);
    };
    if (index == 0) getCategories();
  }, [index]);

  React.useEffect(() => {
    if (index != 0) setCategories(categories[index2].submenus);
  }, [index]);

  const categoryItem = (category, index2) => {
    return (
      <div
        className={styles.CategoryItem}
        onClick={() => {
          setIndex(index + 1);
          setIndex2(index2);
        }}>
        {category.mediumURL ? (
          <img src={"http://5.202.179.236:8282" + category.mediumURL} />
        ) : (
          <img src={noImage} />
        )}

        <p className='fw-bold fs-6'> {category.title} </p>
      </div>
    );
  };
  return (
    <>
      <div className='title-homepage' style={{ marginTop: "6rem" }}>
        <h2>گروه بندی کالا</h2>
        <small>Categories</small>
      </div>
      <div className={styles.Categories}>
        {categories.length > 0 &&
          categories.map((category, index) => {
            return categoryItem(category, index);
          })}
        {categories.length == 0 && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ color: "red", marginBottom: "10px" }}>
              زیر گروه کالا وجود ندارد !{" "}
            </p>
            <p
              className={styles.productDetails}
              onClick={() => {
                setIndex(0);
              }}>
              بازگشت
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Categories;
