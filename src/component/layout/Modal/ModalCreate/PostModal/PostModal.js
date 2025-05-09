import React, { useRef, useState } from "react";
import styles from "./PostModal.module.css";

const PostModal = ({ onClose }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [charCount, setCharCount] = useState(0);
  const fileInputRef = useRef();

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setCharCount(newStatus.length);
  };

  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.postModalHeader}>
          <div className={styles.postModalHeaderLeft}>
            {imagePreview && (
              <button
                onClick={() => setImagePreview(null)}
                className={styles.backBtn}
              >
                <i class="fa-solid fa-arrow-left"></i>
              </button>
            )}

            <span className={styles.postModalHeaderTitle}>Create new post</span>
          </div>
          {imagePreview && <span className={styles.shareText}>Share</span>}
        </div>

        {imagePreview === null ? (
          <div className={styles.postModalMain}>
            <div className={styles.postModalIcon}>
              <i className="fa-regular fa-image"></i>
            </div>
            <div className={styles.postModalText}>
              Drag photos and videos here
            </div>
            <div
              className={styles.postModalBtnWrapper}
              onClick={openFileSelector}
            >
              <span className={styles.postModalBtn}>Select from computer</span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className={styles.fileInput}
              onChange={handleFileSelect}
            />
          </div>
        ) : (
          <div className={styles.imagePreviewContainer}>
            <div className={styles.imageSelect}>
              <img
                src={imagePreview}
                alt="Selected"
                className={styles.imagePreview}
              />
            </div>
            <div className={styles.rightSideSection}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  <img
                    src="https://cdn.pixabay.com/photo/2023/11/21/13/29/computer-8403409_1280.jpg"
                    alt="Profile"
                    className={styles.profilePic}
                  />
                </div>
                <span className={styles.username}>levinfoux</span>
              </div>

              <div className={styles.statusInput}>
                <input
                  type="text"
                  value={status}
                  onChange={handleStatusChange}
                  className={styles.statusInputField}
                />
              </div>

              <div className={styles.countNum}>{`${charCount}/2,200`}</div>

              <div className={styles.locationPicker}>
                <input
                  type="text"
                  placeholder="Add location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={styles.locationInput}
                />
                <div className={styles.iconLocation}>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
              </div>
              <div className={styles.postModalSetting}>
                <div className={styles.advancedSettings}>
                  <span className={styles.advancedText}>Advanced settings</span>
                  <div className={styles.advancedIcon}>
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.postModalOverlay} onClick={onClose}></div>

      <div className={styles.outPostModal} onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default PostModal;
