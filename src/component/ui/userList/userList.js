import React from "react";
import styles from "./userList.module.css";

const UserList = ({ users }) => {
  return (
    <ul className={styles.listUser}>
      {users.length > 0 ? (
        users.map((user, index) => (
          <li key={index} className={styles.itemUser}>
            <div className={styles.firstBlockitemUser}>
              <img
                src={
                  user.image ||
                  "https://i.pinimg.com/736x/f4/c1/f1/f4c1f156f8ff3142250f1882b4394a7a.jpg"
                }
                alt={user.username}
                className={styles.avatarUser}
              />
              <div className={styles.infoUser}>
                <span className={styles.username}>{user.username}</span>
                <span className={styles.fullName}>{user.name}</span>
              </div>
            </div>
            <div className={styles.endBlockitemUser}>
              <label className={styles.switch}>
                {user.type === "following" && (
                  <input type="checkbox" checked={user.verified} />
                )}
                {user.type === "follower" && (
                  <input type="checkbox" checked={user.hide} />
                )}
                <span class={styles.checkmark}></span>
              </label>
            </div>
          </li>
        ))
      ) : (
        <p className="">No users found.</p>
      )}
    </ul>
  );
};

export default UserList;
