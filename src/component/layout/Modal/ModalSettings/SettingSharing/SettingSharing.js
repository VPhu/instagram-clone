import React from "react";
import SwitchButton from "../../../../ui/btnSwitch/btnSwitch";
import styles from "./SettingSharing.module.css";

const SettingSharing = () => {
  return (
    <div className={styles.settingSharing}>
      <h2 className="titleModalSettingItem">Sharing</h2>
      <h3 className="subTitleItemSetting">
        What people can share on Instagram
      </h3>
      <div className={styles.sharingContainer}>
        <div className={styles.sharingInputSelect}>
          <span>Stories in messages</span>
          <div className={styles.sharingSwitch}>
            <SwitchButton />
          </div>
        </div>
        <div className={styles.descriptionSharing}>
          <span className="descriptionSetting">
            Allow people to send your stories in a message to someone else on
            Instagram. Only your followers can see your stories.
          </span>
        </div>
      </div>
    </div>
  );
};
export default SettingSharing;
