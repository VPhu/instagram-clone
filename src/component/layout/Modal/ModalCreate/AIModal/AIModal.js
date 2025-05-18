import React from 'react';
import styles from './AIModal.module.css';

const AIModal = () => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>AI Studio</h2>
        <p>Here you can create something using AI!</p>
      </div>
    </div>
  );
};

export default AIModal;
