import React from "react";
import styles from "./SettingBlocked.module.css";

const listBlock = [
  {
    image: "",
    username: "fide.vn",
    fullname: "FiDÉ",
    block: true,
  },
  {
    image: "",
    username: "abhi.editz_4k",
    fullname: "ABHiSHEK",
    block: true,
  },
];
const SettingBlocked = () => {
  return (
    <div className={styles.settingBlockedWrapper}>
      <div className="selectNotificationsHeader">
        <div className="selectNotificationsIcon">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <h3 className="titleModalSettingItem">Blocked accounts</h3>
      </div>
      <div className={styles.descriptionBlocked}>
        You can block people anytime from their profiles.
      </div>
      {listBlock.length > 0 ? (
        <div className={styles.listBlockUser}>
          {listBlock.map((item, index) => (
            <div className={styles.itemBlockUser} key={index}>
              <div className={styles.firstBlockItem}>
                <div className={styles.avatarWrapper}>
                  <img
                    className={styles.avatar}
                    src={
                      item.image ||
                      "https://media.istockphoto.com/id/1500560617/vi/anh/ng%C6%B0%E1%BB%9Di-d%C3%B9ng-c%C3%B3-d%E1%BA%A5u-hi%E1%BB%87u-h%E1%BB%A7y-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-xanh-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-b%E1%BB%8B-ch%E1%BA%B7n-k%E1%BA%BFt-xu%E1%BA%A5t-3d.jpg?s=2048x2048&w=is&k=20&c=1cSdS3FoCllCRAxpaWGDrChhjW8s8VjbmGDUAZVGdwE="
                    }
                    alt={item.fullname}
                  />
                </div>
                <div className={styles.infoUser}>
                  <span className={styles.username}>{item.username}</span>
                  <span className={styles.fullname}>{item.fullname}</span>
                </div>
              </div>
              <div className={styles.endBlockItem}>
                <span className={styles.btnBlockText}>Unblock</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.nodataBlocked}>
          <span className={styles.nodataBlockedText}>
            You haven't blocked anyone.
          </span>
        </div>
      )}
    </div>
  );
};
export default SettingBlocked;
