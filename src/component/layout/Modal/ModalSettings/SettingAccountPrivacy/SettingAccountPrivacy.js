import React from "react";
import styles from "./SettingAccountPrivacy.module.css";
import BtnSwitch from "../../../../ui/btnSwitch/btnSwitch";

const SettingAccountPrivacy = () => {
  return (
    <div className={styles.settingAccountPrivacy}>
      <h2 className="titleModalSettingItem">Account privacy</h2>

      <div className={styles.selectPrivateAccount}>
        <span className={styles.selectPrivateAccountText}>Private account</span>
        <BtnSwitch />
      </div>

      <div className={styles.privateAccountDescriptionWrapper}>
        <div className={styles.privateAccountDescription}>
          <span className="descriptionSetting">
            When your account is public, your profile and posts can be seen by
            anyone, on or off Instagram, even if they don't have an Instagram
            account.
          </span>
        </div>

        <div className={styles.privateAccountDescription}>
          <span className="descriptionSetting">
            When your account is private, only the followers you approve can see
            what you share, including your photos or videos on hashtag and
            location pages, and your followers and following lists. Certain info
            on your profile, like your profile picture and username, is visible
            to everyone on and off Instagram. Learn more
          </span>
        </div>
      </div>
    </div>
  );
};
export default SettingAccountPrivacy;
