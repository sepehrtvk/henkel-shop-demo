import React, { useEffect, useState } from "react";
import axios from "axios";

//Styles
import styles from "./Blogs.module.css";

//Components
import BreadcrumbBlogs from "./blogs/BreadcrumbBlogs";
import AnyBlog from "./blogs/AnyBlog";
import Loading from "./shared/Loading";

const URL = "https://testapi.io/api/mehran1984/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(URL);
      setBlogs(response.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="container">
      <BreadcrumbBlogs />
      <div className={blogs.length ? styles.blogs : ""}>
        {blogs.length ? (
          blogs.map((blog) => <AnyBlog key={blog.id} data={blog} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Blogs;
