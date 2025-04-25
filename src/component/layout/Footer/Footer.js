import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const listLink = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];
  const listLanguage = [
    { symbolLanguage: "en", name: "english", describe: "English" },
    { symbolLanguage: "vn", name: "vietnam", describe: "Việt Nam" },
    { symbolLanguage: "fr", name: "francais", describe: "Français" },
    { symbolLanguage: "de", name: "deutsch", describe: "Deutsch" },
  ];
  return (
    <div className={styles.containerFooter}>
      <div className={styles.affiliateTags}>
        {listLink.map((item, index) => (
          <Link className={styles.tagItem} to="#" key={index}>
            {item}
          </Link>
        ))}
      </div>

      <div className={styles.languageSettings}>
        <select
          className={styles.selectLanguage}
          name="language-select"
          id="language-select"
        >
          {listLanguage.map((item, index) => (
            <option lang={item.symbolLanguage} value={item.name}>
              {item.describe}
            </option>
          ))}
        </select>

        <div className={styles.publish}>© 2025 Instagram from Meta</div>
      </div>
    </div>
  );
};
export default Footer;
