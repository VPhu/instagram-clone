import React, { useState } from "react";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import ProfileInfo from "../../component/layout/Profile/ProfileInfo/ProfileInfo";
import ProfileHighlight from "../../component/layout/Profile/ProfileHighlight/ProfileHighlight";
import ProfilePosts from "../../component/layout/Profile/ProfileMore/ProfilePosts/ProfileMore";
import Footer from "../../component/layout/Footer/Footer";
import styles from "./ProfilePage.module.css";

const Profile = () => {
  const itemControl = [
    {
      name: "POSTS",
      icon: "fa-solid fa-table-cells",
    },
    {
      name: "SAVED",
      icon: "fa-regular fa-bookmark",
    },
    {
      name: "TAGGED",
      icon: "fa-regular fa-id-badge",
    },
  ];

  const listPost = [
    {
      image:
        "https://i.pinimg.com/736x/4d/a4/44/4da4441108a5238b1d18206cac2ebbe8.jpg",
      likes: 57,
      cmts: 24,
    },
    {
      image:
        "https://i.pinimg.com/736x/6b/56/08/6b5608227f509e32bcf57692ae92f448.jpg",
      likes: 12,
      cmts: 3,
    },
  ];
  const listSaved = []
  const listTagged = []

  const dataMap = {
    POSTS: listPost,
    SAVED: listSaved,
    TAGGED: listTagged
  }

  const [active, setActive] = useState("POSTS");

  return (
    <div>
      <Sidebar />
      <div className={styles.profileMain}>
        <div className={styles.profileContainer}>
          <ProfileInfo />
          <ProfileHighlight />
          <div className={styles.profileMore}>
            <div className={styles.controlBarProfile}>
              {itemControl.map((item, index) => (
                <div className={`${styles.controlElement} ${active === item.name ? styles.activeControl : ""}`} key={index} onClick={()=>setActive(item.name)}>
                  <div className={styles.controlElementIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <span className={styles.controlElementName}>{item.name}</span>
                </div>
              ))}
            </div>
            <ProfilePosts data={dataMap[active]} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Profile;
