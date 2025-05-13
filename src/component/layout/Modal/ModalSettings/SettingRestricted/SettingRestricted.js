import React from "react";
import styles from "./SettingRestricted.module.css";
const SettingRestricted = () => {
  return (
    <div className={styles.settingRestricted}>
      <div className="selectNotificationsHeader">
        <div className="selectNotificationsIcon">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <h3 className="titleModalSettingItem">Restricted accounts</h3>
      </div>
      <div className={styles.restrictedContairner}>
        <div className={styles.descriptionRestricted}>
          <div className={styles.descriptionRestrictedText}>
            Protect yourself from unwanted interactions without having to block
            or unfollow people you know. You can restrict them anytime from
            their profiles.
            <span className={styles.linkChange}> Learn how it works</span>
          </div>
          <div className={styles.restrictedContent}>
            <div className={styles.restrictedMessageNoData}>
              <div className={styles.textMessageNoData}>
                You haven't restricted anyone.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingRestricted;
