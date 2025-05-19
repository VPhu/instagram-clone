import React from 'react';
import styles from './PostModal.module.css';

const PostModal = () => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Create a Post</h2>
        <p>Here you can create a post!</p>
      </div>
    </div>
  );
};

export default PostModal;
