import React from "react";
import styles from "./ModalNotifications.module.css";

const dataNoti = [
  {
    time: "3w",
    users: ["nie.yn_", "kiet.lac.792740", "3aam__m"],
    imgUser: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    action: "liked your story",
    imgPost:
      "https://i.pinimg.com/736x/4d/a4/44/4da4441108a5238b1d18206cac2ebbe8.jpg",
  },
  {
    time: "6w",
    users: ["phmhmaitrang"],
    imgUser: [
      "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    action: "liked your story",
    imgPost:
      "https://i.pinimg.com/736x/6b/56/08/6b5608227f509e32bcf57692ae92f448.jpg",
  },
];

const ModalNotifications = () => {
  return (
    <div className={styles.notificationsWrapper}>
      <h1 className={styles.notificationsTitle}>Notifications</h1>
      <div className={styles.notificationsContainer}>
        {dataNoti.length === 0 ? (
          <div className={styles.notificationsNoData}>
            <div className={styles.notificationsNoDataIconWrapper}>
              <div className={styles.notificationsNoDataIcon}>
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className={styles.notificationsNoDataContent}>
              <div className={styles.notificationsNoDataText}>
                Activity On Your Posts
              </div>
              <div className={styles.notificationsNoDataText}>
                When someone likes or comments on one of your posts, you'll see
                it here.
              </div>
              <div className={styles.notificationsNoDataTextBtn}>
                Share your first photo
              </div>
            </div>
          </div>
        ) : (
          <ul className={styles.notificationsList}>
            {dataNoti.map((item, index) => (
              <li key={index} className={styles.notificationsItem}>
                <div className={styles.notiLeft}>
                  <div className={styles.notiAvatarGroup}>
                    {(item.imgUser || []).length === 1 ? (
                      <img
                        src={item.imgUser[0]}
                        alt="user"
                        className={styles.avatarFull}
                      />
                    ) : (
                      (item.imgUser || [])
                        .slice(0, 2)
                        .map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt="user"
                            className={`${styles.avatarImg} ${
                              idx === 0
                                ? styles.avatarTopLeft
                                : styles.avatarBottomRight
                            }`}
                          />
                        ))
                    )}
                  </div>

                  <div className={styles.notiText}>
                    <span className={styles.notificationsUser}>
                      {item.users.join(", ")}
                    </span>{" "}
                    {item.action}.{" "}
                    <span className={styles.notificationsTime}>
                      {item.time}
                    </span>
                  </div>
                </div>
                {item.imgPost && (
                  <div className={styles.notiPostImg}>
                    <img src={item.imgPost} alt="post" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default ModalNotifications;
