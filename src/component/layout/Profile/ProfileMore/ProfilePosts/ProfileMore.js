import React from "react";
import styles from "./ProfileMore.module.css";
const ProfileMore = ({ data }) => {
  return (
    <div className={styles.profileMoreWrapper}>
      {data && data.length > 0 ? (
        <div className={styles.profileMoreContainer}>
          {data.map((item, index) => (
            <div className={styles.profileMoreItem} key={index}>
              <div className={styles.moreItemImageWrapper}>
                <img className={styles.moreItemImage} src={item.image} alt="" />
              </div>
              <div className={styles.overlay}>
                <div className={styles.totalLike}>
                  <div className={styles.iconLike}>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                  <span className={styles.likes}>{item.likes}</span>
                </div>
                <div className={styles.totalComment}>
                    <div className={styles.iconComment}>
                      <i className="fa-solid fa-comment"></i>
                    </div>
                    <span className={styles.comments}>{item.cmts}</span>
                </div>
              </div>
            </div>   
          ))}
        </div>
      ) : (
        <div className={styles.noDataWrapper}>
          <div className={styles.noData}>
            <h1 className={styles.noDataTitle}>Share your data</h1>
            <p className={styles.noDataDecription}>
              There is currently no data for you.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMore;
