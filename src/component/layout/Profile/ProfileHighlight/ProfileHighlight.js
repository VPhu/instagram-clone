import React from "react";
import styles from "./ProfileHighlight.module.css";
const ProfileHighlight = () => {
  const highlights = [
    {
      name: "C#",
      image:
        "https://lanit.com.vn/wp-content/uploads/2023/11/c-sharp-la-gi-10.png",
    },
    {
      name: "Javascript",
      image:
        "https://sharelifeinjapan.com/wp-content/uploads/2021/01/7-tips-don-gian-giup-toi-uu-hoa-code-javascript-cua-ban.png",
    },
    {
      name: "HTML/CSS",
      image: "https://media.kulturbanause.de/2020/11/html-css-lernen.png",
    },
    {
      name: "Java",
      image:
        "https://resources.iostream.co/content/article/tong-quan-ve-ngon-ngu-lap-trinh-java/thumbnail-hd/blob-1600511467219@960x540.jpg",
    },
  ];
  return (
    <div className={styles.profileHighlightWrapper}>
      <div className={styles.profileHighlightContainer}>
        <div className={styles.highlight}>
          {highlights.map((item, index) => (
            <div className={styles.highlightItem} key={index}>
              <div className={styles.highlightImageWrapper}>
                <img
                  className={styles.highlightImage}
                  src={item.image}
                  alt=""
                />
              </div>
              <span className={styles.highlightName}>{item.name}</span>
            </div>
          ))}

          <div className={styles.createHightlight}>
            <div className={styles.highlightImageWrapper}>
              <div className={styles.highlightIcon}>
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <span className={styles.highlightName}>New</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHighlight;
