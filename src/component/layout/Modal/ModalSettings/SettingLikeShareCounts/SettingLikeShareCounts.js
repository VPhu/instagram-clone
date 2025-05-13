import React from "react";
import SwitchButton from "../../../../ui/btnSwitch/btnSwitch";
import styles from "./SettingLikeShareCounts.module.css";

const SettingLikeShareCounts = () => {
  return (
    <div className={styles.settingLikeShareCounts}>
        <h2 className="titleModalSettingItem">Like and share counts</h2>
      <div className={styles.likeShareCountsContainer}>
        <div className={styles.inputSwitchHide}>
          <span className={styles.inputSwitchHideText}>
            Hide like & share counts
          </span>
          <SwitchButton />
        </div>
        <div className={styles.descriptionLikeShareCounts}>
          <div className={styles.headDescriptionLikeShareCounts}>
            <span className="descriptionSetting">
              On Instagram, the number of likes on posts and reels from other
              accounts will be hidden. You can hide the number of likes on your
              own posts and reels by going to Advanced settings before sharing.
            </span>
          </div>
          <div className={styles.endDescriptionLikeShareCounts}>
            <span className="descriptionSetting">
              On Threads, the number of likes, views, reposts and quotes on
              posts from other profiles will be hidden. You can hide these on
              your own posts from the menu for each post.
            </span>
            <span className="linkHelp"> Learn more</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingLikeShareCounts;
