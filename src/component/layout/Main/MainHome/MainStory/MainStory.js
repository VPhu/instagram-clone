import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./MainStory.module.css";
const list = [
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "mancity",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "barcelona",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "realmadrid",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "tottenham",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "liverpool",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "fullham",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "chelsea",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "everton",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "arsenal",
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "van.thuonggg",
  },
];

const MainStory = () => {
  return (
    <div className={styles.wrapperMainStory}>
        {/* <div className={styles.swiperWrapper}></div> */}
      <Swiper
        spaceBetween={8}
        slidesPerView={"auto"}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index} style={{ width: "72px", cursor: "pointer" }}>
            <div className={styles.storyItem}>
              <div className={styles.avatarStory}>
                <img className={styles.avatar} src={item.avt} alt="" />
              </div>
              <span className={styles.userName}>{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.arrowLeft}>
        <div className={styles.iconArrow}>
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        </div>
        <div className={styles.arrowRight}>
          <div className={styles.iconArrow}>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
    </div>
  );
};

export default MainStory;
