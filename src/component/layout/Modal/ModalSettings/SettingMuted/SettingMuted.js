import React from "react";
import styles from "./SettingMuted.module.css";
const SettingMuted = () => {
  return (
    <div className={styles.settingMuted}>
      <div className="selectNotificationsHeader">
        <div className="selectNotificationsIcon">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <h3 className="titleModalSettingItem">Muted accounts</h3>
      </div>
      <div className={styles.settingMutedContainer}>
        <div className={styles.settingMutedNoData}>
            <span className="descriptionSetting">You haven't muted anyone.</span>
        </div>
      </div>
    </div>
  );
};
export default SettingMuted;
