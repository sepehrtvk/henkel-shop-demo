import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//Styles
import styles from "./InsideBlog.module.css";

//Loading
import Loading from "../shared/Loading";

//Components 
import BreadcrumbBlog from "./BreadcrumbBlogs";

const URL = "https://testapi.io/api/mehran1984/blogs";

const InsideBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(URL);
      setBlogs(response.data);
    };
    fetchAPI();
  }, []);

  const id = useParams().id;
  const blog = blogs[id - 1];

  return (
    <>
      {blog ? (
        <div className="container">
          <BreadcrumbBlog blog={blog.title} />
          <div className={styles.insideBlog}>
            <div className={styles.info}>
              <span>نویسنده : {blog.author}</span>
              <span>تاریخ انتشار : {blog.date}</span>
              <span>دسته بندی : {blog.categories}</span>
            </div>
            <img src={blog.image} className={styles.image} alt={blog.title} />
            <h3 className={styles.title}>{blog.title}</h3>
            <p className={styles.description}>{blog.description}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default InsideBlog;
