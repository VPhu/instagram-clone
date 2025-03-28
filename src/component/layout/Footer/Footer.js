import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <div className={styles.affiliateTags}>
        <Link className={styles.tagItem}>Meta</Link>
        <Link className={styles.tagItem}>About</Link>
        <Link className={styles.tagItem}>Blog</Link>
        <Link className={styles.tagItem}>Jobs</Link>
        <Link className={styles.tagItem}>Help</Link>
        <Link className={styles.tagItem}>API</Link>
        <Link className={styles.tagItem}>Privacy</Link>
        <Link className={styles.tagItem}>Terms</Link>
        <Link className={styles.tagItem}>Locations</Link>
        <Link className={styles.tagItem}>Instagram Lite</Link>
        <Link className={styles.tagItem}>Threads</Link>
        <Link className={styles.tagItem}>Contact Uploading & Non-Users</Link>
        <Link className={styles.tagItem}>Meta Verified</Link>
      </div>

      <div className={styles.languageSettings}>
        <select className={styles.selectLanguage} name="language-select" id="language-select">
          <option lang="de" value="deutsch">
            Deutsch
          </option>
          <option lang="en" value="english" selected>
            English
          </option>
          <option lang="fr" value="francais">
            Français
          </option>
          <option lang="vn" value="vietnam">
            Việt Nam
          </option>
        </select>

        <div className={styles.publish}>
        © 2025 Instagram from Meta
        </div>
      </div>
    </div>
  );
};
export default Footer;
