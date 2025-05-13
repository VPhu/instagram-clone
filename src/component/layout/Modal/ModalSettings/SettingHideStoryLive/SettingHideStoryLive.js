import React, { useState } from "react";
import InputSearch from "../../../../ui/inputSearch/inputSearch";
import UserList from "../../../../ui/userList/userList";
import dataFollowers from "../dataUser/dataUserFollowers";
import styles from "./SettingHideStoryLive.module.css";
const SettingHideStoryLive = () => {
  const [selectHideStroryLive, setSelectHideStroryLive] = useState(false);
  const [filteredFollowers, setFilteredFollowers] = useState(dataFollowers);
  const handleClickSelectHide = () => {
    setSelectHideStroryLive(!selectHideStroryLive);
  };
  return (
    <div className={styles.settingHideStoryLive}>
      {selectHideStroryLive ? (
        <div className={styles.hideStoryLive}>
          <h2 className="titleModalSettingItem">Hide story and live</h2>
          <div onClick={handleClickSelectHide} className="inputSelectSetting">
            <span className="inputSelectSettingText">
              Hide story and live from
            </span>
            <div className="inputSelectSettingIcon">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.hideStoryLiveFrom}>
          <div className="selectNotificationsHeader">
            <div
              onClick={handleClickSelectHide}
              className="selectNotificationsIcon"
            >
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <h3 className="titleModalSettingItem">Hide story from</h3>
          </div>
          <div className={styles.hideStoryLiveFromContainer}>
            <span className="desciptionModalChildren">
              Hide all photos and videos you add to your story from specific
              people. This also hides your live videos.
            </span>
            <InputSearch onSearch={setFilteredFollowers} data={dataFollowers} />
            <UserList users={filteredFollowers} />
          </div>
        </div>
      )}
    </div>
  );
};
export default SettingHideStoryLive;
