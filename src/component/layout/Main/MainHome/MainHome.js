import React from "react";
import styles from "./MainHome.module.css";
import MainPost from "./MainPost/MainPost";
import MainStory from "./MainStory/MainStory";

const MainHome = () => {
  return (
  <div className={styles.mainHomeContainer}>
    <MainStory/>
    <MainPost/>
  </div>
  )
};

export default MainHome;
