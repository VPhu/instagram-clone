import React, { useState, useEffect, useRef } from "react";
import styles from "./StoryViewer.module.css";
import { Link } from "react-router-dom";

const StoryViewer = ({ stories, onClose, userName, avatar }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const [like, setLike] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const time = 15000;
    clearInterval(intervalRef.current);

    if (!isPause) {
      const remainingTime = time * (1 - progress / 100);
      const tick = time / 100;

      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            if (index < stories.length - 1) {
              setIndex(index + 1);
              setProgress(0);
            } else {
              onClose();
            }
            return 0;
          }
          return prev + 1;
        });
      }, tick);
    }

    return () => clearInterval(intervalRef.current);
  }, [index, isPause]);

  const handleNext = () => {
    if (index < stories.length - 1) {
      setIndex(index + 1);
      setProgress(0);
      setIsPause(false);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setProgress(0);
      setIsPause(false);
    }
  };

  const handlePauseResume = () => {
    setIsPause((prev) => !prev);

    if (videoRef.current) {
      if (!isPause) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    setIsMute((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
  const toggleLike = () => {
    setLike((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const story = stories[index];

  return (
    <div className={styles.overlay}>
      <div className={styles.viewer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerStory}>
          <div className={styles.infoUser}>
            <img
              src={
                avatar
                  ? avatar
                  : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1745486675~exp=1745490275~hmac=1a1595ca673fa0fcf3d0b951631f140028f1e5db2cf6c55a9a8e1eeb2fafb3d9&w=826"
              }
              className={styles.avatar}
              alt="avatar"
            />
            <span className={styles.username}>{userName}</span>
          </div>
          <div className={styles.buttonStory}>
            {story.type === "video" && (
              <button className={styles.muteToggle} onClick={toggleMute}>
                {isMute ? (
                  <i className="fa-solid fa-volume-xmark"></i>
                ) : (
                  <i className="fa-solid fa-volume-high"></i>
                )}
              </button>
            )}
            <button className={styles.pauseResume} onClick={handlePauseResume}>
              {isPause ? (
                <i className="fa-solid fa-play"></i>
              ) : (
                <i className="fa-solid fa-pause"></i>
              )}
            </button>
            <button className={styles.buttonMore}>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>

        <div className={styles.progressContainer}>
          {stories.map((story, idx) => (
            <div key={idx} className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{
                  width:
                    idx < index
                      ? "100%"
                      : idx === index
                      ? `${progress}%`
                      : "0%",
                }}
              ></div>
            </div>
          ))}
        </div>

        {story.type === "image" ? (
          <img src={story.url} alt="story" className={styles.content} />
        ) : (
          <video
            src={story.url}
            ref={videoRef}
            muted
            playsInline
            autoPlay
            className={styles.content}
          />
        )}

        <div className={styles.controlBar}>
          <div className={styles.controlBarItemLeft} onClick={handlePrev}>
            <div className={styles.controlBarItemIconWrapper}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
          </div>
          <div className={styles.controlBarItemRight} onClick={handleNext}>
            <div className={styles.controlBarItemIconWrapper}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className={styles.storyFooter}>
          <input
            type="text"
            placeholder={`Reply to ${userName}...`}
            className={styles.inputReply}
          />
          <div className={styles.iconButtons}>
            <button
              onClick={toggleLike}
              className={styles.iconButton}
            >
              <i
                className={`fa-heart ${
                  like[index] ? "fa-solid " + styles.liked : "fa-regular"
                }`}
              ></i>
            </button>

            <button
              onClick={() => alert("Shared")}
              className={styles.iconButton}
            >
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.logoInstagramWrapper}>
        <Link to="/" onClick={onClose}>
        <div className={styles.logoInstagram}></div>
        </Link>
      </div>
      <button className={styles.buttonClose} onClick={onClose}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default StoryViewer;
