import { useState } from "react"
import styles from "./UserToolTip.module.css"

const posts = [
    "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/Nh%E1%BB%AFng%20n%E1%BB%97i%20kh%E1%BB%95%20c%E1%BB%A7a%20d%C3%A2n%20IT%203-min.png",
    "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2020/09/Dev-l%C3%A0-ngh%E1%BB%81-g%C3%AC-3.jpg",
    "https://vtiacademy.edu.vn/upload/images/anh-link/khoa-hoc-frontend-online-2.jpg",
    "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2024/05/lap-trinh-web.jpg"
]

const UserToolTip = ({user,children}) => {
const [show, setShow] = useState(false)
    return (
    <div className={styles.userToolTipWrapper} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        {children}
        {show && (
            <div className={styles.userToolTipContainer}>
                <div className={styles.headBox}>
                    <div className={styles.avatarUserWrapper}>
                        <img className={styles.avatarUser} src={user.avatar || "https://uniathena.com/themes/custom/athena/images/avatar.jpg"} alt=""/>
                    </div>
                    <div className={styles.infoUser}>
                        <span className={styles.username}>{user.username}</span>
                        <span className={styles.fullname}>{user.fullname || "Full name"}</span>
                    </div>
                </div>
                <div className={styles.secondBox}>
                    <div className={styles.postCount}>
                        <span className={styles.numbersPostCount}>{user.posts || 0}</span>
                        <span className={styles.textPostCount}>posts</span>
                    </div>
                    <div className={styles.followersCount}>
                        <span className={styles.numbersFollowersCount}>{user.followers || 0}</span>
                        <span className={styles.textFollowersCount}>followers</span>
                    </div>
                    <div className={styles.followingCount}>
                        <span className={styles.numbersFollowingCount}>{user.following || 0}</span>
                        <span className={styles.textFollowingCount}>following</span>
                    </div>
                </div>
                <div className={styles.thirdBox}>
                    {posts.slice(0,3).map((postsImg, index) => (
                        <img key={index} className={styles.imagePost} src={postsImg} alt=""/>
                    ))}
                </div>
                <div className={styles.endBox}>
                    <div className={styles.btnFollow}>
                        <div className={styles.iconFollow}>
                        <i className="fa-solid fa-user-plus"></i>
                        </div>
                        <span className={styles.textFollow}>Follow</span>
                    </div>
                </div>
            </div>
        )}
    </div>
)
}

export default UserToolTip
