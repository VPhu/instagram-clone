import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StoryViewer from "./StoryViewer/StoryViewer";
import "swiper/css";
import styles from "./MainStory.module.css";
const list = [
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "mancity",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-11.jpg",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "barcelona",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-28.jpg",
      },
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-san-co-(18).jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "realmadrid",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-19.jpg",
      },
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-san-co-(29).jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "tottenham",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-32.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "liverpool",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-33.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "fullham",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-33.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "chelsea",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-33.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "everton",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-33.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "arsenal",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-33.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
  {
    avt: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826",
    name: "van.thuonggg",
    stories: [
      {
        type: "image",
        url: "https://aobongda24h.com/pic/news/images/hinh-nen-bong-da-30.jpg",
      },
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/10349008/10349008-uhd_1440_2732_25fps.mp4",
      },
    ],
  },
];

const MainStory = () => {
  const [itemSlect, setItemSelect] = useState(null);
  return (
    <div className={styles.wrapperMainStory}>
      <Swiper spaceBetween={8} slidesPerView={"auto"}>
        {list.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "72px", cursor: "pointer" }}
            onClick={() => setItemSelect(item)}
          >
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

      {itemSlect && (
        <StoryViewer
          avatar={itemSlect.avt}
          userName={itemSlect.name}
          stories={itemSlect.stories}
          onClose={() => setItemSelect(null)}
        />
      )}
    </div>
  );
};

export default MainStory;
