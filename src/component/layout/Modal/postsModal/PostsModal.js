import styles from "./PostsModal.module.css";
import { getTimeSince } from "../../../../utils/timeUtils";
import { getClearTime } from "../../../../utils/clearTimeUnit";

const PostsModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeaderToggle}>
            <div className={styles.infoAuthor}>
              <img
                src={item.creatorId.avatar || "https://uniathena.com/themes/custom/athena/images/avatar.jpg"}
                alt="Avatar"
                className={styles.avatar}
              />
              <div className={styles.author}>
                <span className={styles.authorName}>{item.creatorId.username}</span>
                <span className={styles.music}>{item.music || null}</span>
              </div>
            </div>
            <div className={styles.btnMoreModal}>
              <i className="fas fa-ellipsis"></i>
            </div>
          </div>
        <div className={styles.videoWrapper}>
          <img
          alt=""
            src={item.imageUrl}
            className={styles.modalVideo}
          />
        </div>
        <div className={styles.interactionExploreToggle}>
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
              {item.likes.length.toLocaleString()} likes
            </div>
            <span className={styles.postTime}>{getClearTime(item.createdAt)}</span>
            <div className={styles.inputCommentWrapper}>
              <input
                className={styles.inputComment}
                placeholder="Add a comment..."
              />
              <span className={styles.btnSubmit}>Post</span>
            </div>
          </div>

        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <div className={styles.infoAuthor}>
              <img
                src={item.creatorId.avatar || "https://uniathena.com/themes/custom/athena/images/avatar.jpg"}
                alt="Avatar"
                className={styles.avatar}
              />
              <div className={styles.author}>
                <span className={styles.authorName}>{item.creatorId.username}</span>
                <span className={styles.music}>{item.music || null}</span>
              </div>
            </div>
            <div className={styles.btnMoreModal}>
              <i className="fas fa-ellipsis"></i>
            </div>
          </div>
          <div className={styles.modalStats}>
            <div className={styles.discussExplore}>
              {item.comments.map((item) => (
                <div className={styles.comments}>
                  <div className={styles.infoUser}>
                    <div className={styles.avatarUserWrapper}>
                      <img
                        className={styles.avatar}
                        src={item.avatar || "https://uniathena.com/themes/custom/athena/images/avatar.jpg"}
                        alt="AvatarUser"
                      />
                    </div>
                    <div className={styles.commentContainer}>
                      <div className={styles.headComment}>
                        <span className={styles.authorName}>
                          {item.username || "username"}
                        </span>
                        <span className={styles.commentContent}>
                          {item.text}
                        </span>
                      </div>
                      <div className={styles.lastComment}>
                        <span className={styles.timeComment}>{getTimeSince(item.createdAt)}</span>
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
              {item.likes.length.toLocaleString()} likes
            </div>
            <span className={styles.postTime}>{getClearTime(item.createdAt)}</span>
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

export default PostsModal;
