import React, { useState } from "react";
import styles from "./SettingCloseFriends.module.css";
import InputSearch from "../../../../ui/inputSearch/inputSearch";
import UserList from "../../../../ui/userList/userList";
import dataUserFollowing from "../dataUser/dataUserFollowing";

const SettingCloseFriends = () => {
  const [filteredFollowing, setFilteredFollowing] = useState(dataUserFollowing);

  return (
    <div className={styles.container}>
      <div className="selectNotificationsHeader">
        <div className="selectNotificationsIcon">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <h3 className="titleModalSettingItem">Close Friends</h3>
      </div>

      <div className={styles.descriptionCloseFriends}>
        We don't send notifications when you edit your close friends list.
        <span className="linkHelp"> How it works.</span>
      </div>

      <InputSearch data={dataUserFollowing} onSearch={setFilteredFollowing} />
      <UserList users={filteredFollowing} />
    </div>
  );
};

export default SettingCloseFriends;
