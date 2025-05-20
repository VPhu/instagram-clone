import React from 'react';
import styles from "./SidebarModalWrapper.module.css"

const SidebarModalWrapper = ({isOpen, title,children}) => {
  return (
    <div className={`${styles.modalSidebar} ${isOpen ? styles.openModal : ""}`}>
    <div className={`${styles.sidebarModalWrapper} `}>
      <h1 className={styles.titlesidebarModal}>{title}</h1>
      {children}
    </div>
    </div>
  );
};

export default SidebarModalWrapper;
