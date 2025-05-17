import React from "react";
import styles from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div className={styles.profileInfoWrapper}>
      <div className={styles.profileInfoAvatarWrapper}>
        <div className={styles.profileInfoAvatar}>
          <img
            className={styles.avatar}
            src="https://cdn.pixabay.com/photo/2023/11/21/13/29/computer-8403409_1280.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.userInformationWrapper}>
        <div className={styles.userInformation}>
          <div className={styles.profileUsername}>
            <div className={styles.userName}>
              <span className={styles.userNameText}>_leninfoux</span>
            </div>

            <div className={styles.btnInfoProfile}>
              <div className={styles.btnUserName}>
                <span className={styles.btnStyle}>Edit profile</span>
              </div>
              <div className={styles.btnUserName}>
                <span className={styles.btnStyle}>View archive</span>
              </div>
            </div>
            <div className={styles.btnSettingWrapper}>
              <div className={styles.btnSetting}>
                <i class="fa-solid fa-gear"></i>
              </div>
            </div>
          </div>
          <div className={styles.profileStats}>
            <div className={styles.totalPosts}>
              <span className={styles.numbers}>0</span> posts
            </div>
            <div className={styles.totalFollower}>
              <span className={styles.numbers}>12</span> follower
            </div>
            <div className={styles.totalFollowing}>
              <span className={styles.numbers}>574</span> following
            </div>
          </div>
          <div className={styles.profileFullname}>
            <span className={styles.fullName}>Lê Văn Phú</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
