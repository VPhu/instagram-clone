import React from 'react';
import styles from './CreateModal.module.css';

const CreateModal = () => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <div className={styles.option}>
          <i className="fas fa-pen"></i>
          <span>Post</span>
        </div>
        <div className={styles.option}>
          <i className="fas fa-brain"></i>
          <span>AI Studio</span>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
