import React, { useEffect, useState } from "react";
import { getTimeSince } from "../../../../../utils/timeUtils";
import UserToolTip from "../../../../ui/toolTip/userToolTip/UserToolTip";
import PostsModal from "../../../Modal/postsModal/PostsModal";
import styles from "./MainPost.module.css";
import { toast } from "react-toastify";

const MainPost = () => {
  const [posts, setPosts] = useState([])
  const [selectedPosts, setSelectedPosts] = useState(null)
  
  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts/")
      const data = await response.json()
        console.log(data)
  
      if(response.ok) {
        setPosts(data.results)
      } else {
        const error = new Error(data.message || "Server error");
        error.status = response.status;
        throw error;
      }
    }catch (error) {
      toast.error(error)
    }
    
  }
  
  useEffect(()=>{
    fetchPosts()
  },[])
  
  return (
    <div className={styles.postWrapper}>
      {posts.map((item) => (
        <div className={styles.post} key={item._id}>
          <div className={styles.personPosting}>
            <div className={styles.posterInfor}>
              <div className={styles.posterImageWrapper}>
                <img className={styles.posterImage} src={item.creatorId.avatar || "https://uniathena.com/themes/custom/athena/images/avatar.jpg"} alt="" />
              </div>
              <UserToolTip user={item.creatorId}>
                <div className={styles.nameUser}>{item.creatorId.username}</div>
              </UserToolTip>
              <div className={styles.postingTime}>
                <div className={styles.iconDot}>
                  <i className="fas fa-circle"></i>
                </div>
                <span className={styles.countTime}>{getTimeSince(item.createdAt)}</span>
              </div>
            </div>
            <div className={styles.additionalActionButton}>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className={styles.postImageWrapper}>
            <img className={styles.postImage} src={item.imageUrl} alt="" />
          </div>

          <div className="postFoot">
            <div className={styles.postInteraction}>
              <div className={styles.firstInteraction}>
                <div className={styles.iconPostLikes}>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className={styles.iconPostComments} onClick={()=>setSelectedPosts(item)}>
                  <i className="fa-regular fa-comment"></i>
                </div>
                <div className={styles.iconPostShare}>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
              </div>
              <div className={styles.endInteraction}>
                <i class="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <div className="postContent">
              <div className={styles.interactionTurn}>
                {`${item.likes.length} likes`}
              </div>
              <div className={styles.content}>
                <UserToolTip user={item.creatorId}>
                  <div className={styles.nameUserContent}>{item.creatorId.username}</div>
                </UserToolTip>

                <div className={styles.postDescription}>{item.caption}</div>
              </div>
            </div>
            <div className={styles.postComments}>
              <div className={styles.showComments} onClick={()=>setSelectedPosts(item)}>
                {`View all ${item.comments.length} comments`}
              </div>
              <div className={styles.submitComments}>
                <input
                  className={styles.inputComment}
                  placeholder="Add a comment..."
                />
              </div>
            </div>
          </div>

          <PostsModal item={selectedPosts} onClose={()=> setSelectedPosts(null)}/>
        </div>
      ))}
    </div>
  );
};
export default MainPost;
