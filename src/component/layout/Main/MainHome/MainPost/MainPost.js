import React from "react";
import styles from "./MainPost.module.css"

const MainPost = () => {
    const post = [
        {
            avatar: "https://prephoops.com/wp-content/uploads/sites/2/2024/05/IMG_5511.png",
            userName: "Front-end Developer",
            time: "8h",
            image: "https://i.pinimg.com/736x/8e/66/4e/8e664e85d1efabd22d64cce61f0145ff.jpg",
            likes: 48,
            description: "Nghỉ chút uống Coca-Cola đi mấy ní!",
            comments: 108,

        },
        {
            avatar: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
            userName: "apple",
            time: "2d",
            image: "https://i.pinimg.com/736x/ac/d2/91/acd291a8f4e069c8303341b15e732b58.jpg",
            likes: 623,
            description: "New !!! Airpods pro only at apple",
            comments: 233,

        },
        {
            avatar: "https://i.pinimg.com/736x/66/c9/f1/66c9f1e9d4c1b13a6db79eebb38241a6.jpg",
            userName: "G Dragon",
            time: "3d",
            image: "https://i.pinimg.com/736x/71/af/46/71af46ea869eb594879d78f8434601cb.jpg",
            likes: 837.231,
            description: "4 forever :((",
            comments: 108.278,

        },
    ]
    return(
        <div className={styles.postWrapper}>
            {post.map((item)=>(
                            <div className={styles.post}>
                            <div className={styles.personPosting}>
                                <div className={styles.posterInfor}>
                                    <div className={styles.posterImageWrapper}>
                                        <img className={styles.posterImage} src={item.avatar} alt=""/>
                                    </div>
                                    <div className={styles.nameUser}>{item.userName}</div>
                                    <div className={styles.postingTime}>
                                        <div className={styles.iconDot}>
                                            <i className="fas fa-circle"></i>
                                        </div>
                                        <span className={styles.countTime}>{item.time}</span>
                                    </div>
                                </div>
                                <div className={styles.additionalActionButton}>
                                    <i className="fas fa-ellipsis-h"></i>
            
                                </div>
            
                            </div>
                            <div className={styles.postImageWrapper}>
                                <img className={styles.postImage} src={item.image} alt=""/>
                            </div>
            
                            <div className="postFoot">
                                <div className={styles.postInteraction}>
                                    <div className={styles.firstInteraction}>    
                                        <div className={styles.iconPostLikes}>
                                            <i className="fa-regular fa-heart"></i>
                                        </div>
                                        <div className={styles.iconPostComments}>
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
                                            {`${item.likes} likes`}
                                        </div>
                                        <div className={styles.content}>
                                            <div className={styles.nameUserContent}>{item.userName}</div>
                                            
                                            <div className={styles.postDescription}>
                                                {item.description}
                                                </div>
                                        </div>
                                    </div>
                                    <div className={styles.postComments}>
                                        <div className={styles.showComments}>
                                            {`View all ${item.comments} comments`}
                                        </div>
                                        <div className={styles.submitComments}>
                                            <input className={styles.inputComment} placeholder="Add a comment..."/>
                                            {/* <i className="fa-regular fa-face-smile"></i> */}
                                        </div>
                                    </div>
            
            
                            </div>
            
                        </div>
            ))}



            
        </div>
    )
}
export default MainPost;