import React from "react";
import styles from "./ModalSearch.module.css";
const dataSearch = [
  {
    userName: "van.thuonggg",
    fullName: "Nguyễn Thị Vân Thương",
    avt: "/static/media/vanthuong.f5cce5f21624de633cd8.jpg",
    follow: true,
  },
  {
    userName: "xuannie.52",
    fullName: "Xuân Nguyễn",
    avt: "/static/media/xuannguyen.068ead5209964c01a292.jpg",
    follow: false,
  },
];
const ModalSearch = () => {
  return (
    <div className={styles.searchWrapper}>
      <h1 className={styles.titleSearch}>Search</h1>
      <div className={styles.searchBar}>
        <input className={styles.searchInput} placeholder="Search" />
      </div>
      <div className={styles.recentWrapper}>
        <div className={styles.recentTitleWrapper}>
            <span className={styles.recentTitle}>Recent</span>
            {dataSearch.length > 0 && (<span className={styles.btnClearSearch}>Clear all</span>)}
        </div>
        {dataSearch.length === 0 ? (
          <div className={styles.recentContainerNoData}>
            No recent searches.
          </div>
        ) : (
          <div className={styles.recentContainer}>
            <ul className={styles.searchList}>
              {dataSearch.map((item, index) => (
                <li className={styles.searchListItem} key={index}>
                  <div className={styles.avtarUserWrapper}>
                    <img className={styles.avtarUser} src={item.avt} alt="avatar" />
                  </div>
                  <div className={styles.infoUser}>
                    <span className={styles.userName}>{item.userName}</span>
                    <p className={styles.fullName}>
                      {item.fullName}
                      {item.follow && (
                        <div className={styles.follow}>
                          <i className={`fa fa-circle ${styles.iconDotFollow}`} />
                          <span className={styles.follow}>Following</span>
                        </div>
                      )}
                    </p>
                  </div>
                  <div className={styles.iconClearWrapper}>
                    <i class={`fa-solid fa-xmark ${styles.iconClearSearch}`}></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default ModalSearch;
