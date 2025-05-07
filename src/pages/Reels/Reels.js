import React, { useState, useRef } from "react";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import styles from "./Reels.module.css";

const listReels = [
  {
    id: "reel_001",
    avt: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://videos.pexels.com/video-files/12052148/12052148-uhd_1440_2560_30fps.mp4",
    username: "hoangminh_98",
    description: "Cuộc sống là những chuyến đi!",
    hashtags: ["#travel", "#phuot", "#vietnam"],
    music: {
      name: "Lạc Trôi",
      author: "Sơn Tùng M-TP",
    },
    interactions: {
      likes: 12400,
      comments: 238,
    },
  },
  {
    id: "reel_002",
    avt: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://videos.pexels.com/video-files/12036002/12036002-uhd_1440_2560_24fps.mp4",
    username: "foodielover",
    description: "Eat the world",
    hashtags: ["#foodie", "#streetfood", "#anvat"],
    music: {
      name: "Taste",
      author: "Tyga",
    },
    interactions: {
      likes: 18700,
      comments: 564,
    },
  },
  {
    id: "reel_003",
    avt: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://videos.pexels.com/video-files/27692822/12206536_1920_1080_30fps.mp4",
    username: "linhchill",
    description: "Chill nhẹ cuối tuần",
    hashtags: ["#chill", "#cafe", "#sunday"],
    music: {
      name: "Until I Found You",
      author: "Stephen Sanchez",
    },
    interactions: {
      likes: 9200,
      comments: 189,
    },
  },
  {
    id: "reel_004",
    avt: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "https://videos.pexels.com/video-files/29509008/12702329_1440_2560_60fps.mp4",
    username: "techvietnam",
    description: "Nice view !!!",
    hashtags: ["#coffee", "#view", "#review"],
    music: {
      name: "Future Vibes",
      author: "NoCopyrightSounds",
    },
    interactions: {
      likes: 15300,
      comments: 411,
    },
  },
];

function changeNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num > 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 100) {
    return num.toLocaleString();
  } else {
    return num;
  }
}

const Reels = () => {
  const [isPlaying, setIsPlaying] = useState({});
  const [mute, setMute] = useState(true);
  const videoRefs = useRef([]);

  const handleTogglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying((prevState) => ({ ...prevState, [index]: true }));
      } else {
        video.pause();
        setIsPlaying((prevState) => ({ ...prevState, [index]: false }));
      }
    }
  };

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <div className={styles.reels}>
      <Sidebar />
      <div className={styles.reelsContainer}>
        {listReels.map((reel, index) => (
          <div className={styles.reelsWrapper} key={index}>
            <div className={styles.reelsItem}>
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className={styles.reelVideo}
                src={reel.videoUrl}
                autoPlay
                loop
                muted={mute}
                onClick={() => handleTogglePlay(index)}
              />
              <div className={styles.reelInfo}>
                <div className={styles.infoUsername}>
                  <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src={reel.avt} alt="" />
                  </div>
                  <p className={styles.username}>{reel.username}</p>
                </div>
                <p className={styles.description}>{reel.description}</p>
                <p className={styles.hashtags}>{reel.hashtags.join(" ")}</p>
                <div className={styles.musicWrapper}>
                  <p className={styles.music}>
                    <i className={`fa-solid fa-music ${styles.iconMusic}`}></i> {reel.music.name} . {reel.music.author}
                  </p>
                </div>
              </div>
              <button onClick={handleMute} className={styles.muteBtn}>
                {mute ? (
                  <i className="fa-solid fa-volume-xmark"></i>
                ) : (
                  <i className="fa-solid fa-volume-high"></i>
                )}
              </button>
            </div>
            <div className={styles.interactions}>
              <div className={styles.interactionLike}>
                <div className={styles.iconLike}>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <span className={styles.totalLikeText}>{changeNumber(reel.interactions.likes)}</span>
              </div>
              <div className={styles.interactionComment}>
                <div className={styles.iconCmt}>
                  <i className="fa-regular fa-comment"></i>
                </div>
                <span className={styles.totalCmtText}>{changeNumber(reel.interactions.comments)}</span>
              </div>
              <div className={styles.interactionShare}>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className={styles.interactionSave}>
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div className={styles.interactionMore}>
                <i className="fas fa-ellipsis"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
