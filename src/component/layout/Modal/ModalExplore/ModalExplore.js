import React, { useRef, useState } from "react";
import styles from "./ModalExplore.module.css";

const ModalExplore = ({ explore, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mute, setMute] = useState(true)
  if (!explore) return null;

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
    setMute(!mute)
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            src={explore.videoUrl}
            autoPlay
            muted
            loop
            className={styles.modalVideo}
            onClick={handleTogglePlay}
          />

          <button onClick={handleMute} className={styles.muteBtn}>
            {
                mute ? <i class="fa-solid fa-volume-xmark"></i> : <i className="fa-solid fa-volume-high"></i>
            }
          </button>
        </div>

        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <div className={styles.infoAuthor}>
              <img
                src={explore.author.avatar}
                alt="Avatar"
                className={styles.avatar}
              />
              <div className={styles.author}>
                <span className={styles.authorName}>{explore.author.name}</span>
                <span className={styles.music}>{explore.music}</span>
              </div>
            </div>
            <div className={styles.btnMoreModal}>
              <i className="fas fa-ellipsis"></i>
            </div>
          </div>
          <div className={styles.modalStats}>
            <div className={styles.discussExplore}>
              {explore.comments.map((item) => (
                <div className={styles.comments}>
                  <div className={styles.infoUser}>
                    <div className={styles.avatarUserWrapper}>
                      <img
                        className={styles.avatar}
                        src={item.avatar}
                        alt="AvatarUser"
                      />
                    </div>
                    <div className={styles.commentContainer}>
                      <div className={styles.headComment}>
                        <span className={styles.authorName}>
                          {item.username}
                        </span>
                        <span className={styles.commentContent}>
                          {item.text}
                        </span>
                      </div>
                      <div className={styles.lastComment}>
                        <span className={styles.timeComment}>{item.time}</span>
                        <span className={styles.likesComment}>
                          {item.likes} like
                        </span>
                        <span className={styles.reply}>Reply</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.loveComments}>
                    <i class="fa-regular fa-heart"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.interactionExplore}>
            <div className={styles.interactiveBtn}>
              <div className={styles.firstInteractiveBtn}>
                <div className={styles.btnLike}>
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className={styles.btnCmt}>
                  <i class="fa-regular fa-comment"></i>
                </div>
                <div className={styles.btnShare}>
                  <i class="fa-regular fa-paper-plane"></i>
                </div>
              </div>
              <div className={styles.endInteractiveBtn}>
                <div className={styles.btnSave}>
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
            </div>

            <div className={styles.totalLikes}>
              {explore.likes.toLocaleString()} likes
            </div>
            <span className={styles.postTime}>{explore.postTime}</span>
            <div className={styles.inputCommentWrapper}>
              <input
                className={styles.inputComment}
                placeholder="Add a comment..."
              />
              <span className={styles.btnSubmit}>Post</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.closeBtn} onClick={onClose}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default ModalExplore;
