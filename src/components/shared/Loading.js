import React from "react";

//Styles
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.conatainer}>
      <div className={styles.loading}></div>
    </div>
  );
};

export default Loading;
