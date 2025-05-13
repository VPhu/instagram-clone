import React, { useState } from "react";
import { DataSettingNotifications } from "./dataSettingNotifications";
import styles from "./SettingNotifications.module.css";
const pushNotificationsList = [
  ...DataSettingNotifications.pushNotificationsList,
];
const emailNotificationsList = [
  ...DataSettingNotifications.emailNotificationsList,
];

const SettingNotifications = () => {
  const [selectPushNotifications, setSelectPushNotifications] = useState(null);

  const handleClickItemPush = (notificationType) => {
    setSelectPushNotifications(notificationType);
  };
  return (
    <div className={styles.settingNotifications}>
      {!selectPushNotifications ? (
        <div className={styles.settingNotificationsWrapper}>
          <h2 className="titleModalSettingItem">Notifications</h2>
          <div className={styles.settingNotificationsContainer}>
            <div
              className={styles.settingNotificationsItem}
              onClick={() => {
                handleClickItemPush("push");
              }}
            >
              <div className={styles.notificationsItemName}>
                Push notifications
              </div>
              <div className={styles.notificationsItemIcon}>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
            <div
              className={styles.settingNotificationsItem}
              onClick={() => {
                handleClickItemPush("email");
              }}
            >
              <div className={styles.notificationsItemName}>
                Email notifications
              </div>
              <div className={styles.notificationsItemIcon}>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.selectedNotification}>
          {selectPushNotifications === "push" && (
            <div className={styles.selectPushNotifications}>
              <div className="selectNotificationsHeader">
                <div onClick={()=>{setSelectPushNotifications(null)}} className="selectNotificationsIcon">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
                <h3 className="titleModalSettingItem">Push Notifications</h3>
              </div>
              <div className={styles.pushNotificationsContainer}>
                <div className={styles.pushNotificationsList}>
                  {pushNotificationsList.map((item, index) => (
                    <div className={styles.pushNotificationsItem} key={index}>
                      <span className={styles.titleSettingItem}>
                        {item.title}
                      </span>
                      {Array.isArray(item.itemselect) ? (
                        <div className={styles.radioGroup}>
                          {item.itemselect.map((option, idx) => (
                            <label key={idx} className={styles.radioOption}>
                              <input
                                type="radio"
                                name={item.title}
                                value={option}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.selectPause}>
                          <span className={styles.selectPauseText}>
                            {item.itemselect}
                          </span>
                          <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                          </label>
                        </div>
                      )}
                      <p className={styles.descriptionSettingItem}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectPushNotifications === "email" && (
            <div className={styles.selectPushNotifications}>
              <div className="selectNotificationsHeader">
                <div onClick={()=>{setSelectPushNotifications(null)}} className="selectNotificationsIcon">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
                <h3 className="titleModalSettingItem">Email Notifications</h3>
              </div>
              <div className={styles.pushNotificationsContainer}>
                <div className={styles.pushNotificationsList}>
                  {emailNotificationsList.map((item, index) => (
                    <div className={styles.pushNotificationsItem} key={index}>
                      <span className={styles.titleSettingItem}>
                        {item.title}
                      </span>
                        <div className={styles.radioGroup}>
                          {item.itemselect.map((option, idx) => (
                            <label key={idx} className={styles.radioOption}>
                              <input
                                type="radio"
                                name={item.title}
                                value={option}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      <p className={styles.descriptionSettingItem}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}          
    </div>
  );
};
export default SettingNotifications;
