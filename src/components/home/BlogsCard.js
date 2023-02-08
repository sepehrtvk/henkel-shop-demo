import React, { useState, useEffect } from "react";
import axios from "axios";

//Styles
import styles from "./BlogsCard.module.css";

//Components
import BlogCard from "../shared/BlogCard";

const URL = "https://testapi.io/api/mehran1984/blogs";

const BlogsCard = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(URL);
      setBlogs(response.data);
    };
    fetchAPI();
  }, []);

  const newBlogs = blogs.slice(0, 4);

  return (
    blogs.length > 3 && (
      <div className="carousel-slider">
        <div className="title-homepage">
          <h2>مطالب اخیر</h2>
          <small>Recent Blogs</small>
        </div>
        <div className={styles.blogs}>
          {newBlogs.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    )
  );
};

export default BlogsCard;
