import React from "react";
import styles from "./SidebarMore.module.css";
import vPhong from "../../../../assets/vanphong.jpg"
import tSon from "../../../../assets/thanhson.jpg"
import vThuong from "../../../../assets/vanthuong.jpg"
import nXuan from "../../../../assets/xuannguyen.jpg"
import nNhu from "../../../../assets/nhunhu.jpg"

const newFriends = [
  {
    userName: "im.ph.0621",
    avt: vPhong,
    status: "Suggested for you",
  },
  {
    userName: "lavender_12.06",
    avt: tSon,
    status: "Suggested for you",
  },
  {
    userName: "van.thuonggg",
    avt: vThuong,
    status: "Suggested for you",
  },
  {
    userName: "xuannie.52",
    avt: nXuan,
    status: "Suggested for you",
  },
  {
    userName: "pimhtnn_",
    avt: nNhu,
    status: "Suggested for you",
  },
];

const SidebarMore = () => {
  return (
    <div className={styles.wrapperSidebarMore}>
      <div className={styles.suggestedFollow}>
        <div className={styles.viewMore}>
          <p className={styles.titleSidebarMore}>Suggested for you</p>
          <span className={styles.seeAllSidebarMore}>See All</span>
        </div>
        <div className={styles.containerSidebarMore}>
          <ul className={styles.listUser}>
            {newFriends.map((user, index) => (
              <li key={index} className={styles.itemUser}>
                <div className={styles.wrapperItemUser}>
                  <div className={styles.wrapperImageUser}>
                    <img
                      className={styles.avatar}
                      src={user.avt || "https://prephoops.com/wp-content/uploads/sites/2/2024/05/IMG_5511.png"}
                      alt="User Avatar"
                    />
                  </div>
                  <div className={styles.infoUser}>
                    <p className={styles.username}>{user.userName}</p>
                    <span className={styles.status}>{user.status}</span>
                  </div>
                </div>
                <div className={styles.followUser}>
                  <p className={styles.textFollow}>Follow</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footerSidebarMore}>
            
      </div>
    </div>
  );
};

export default SidebarMore;
