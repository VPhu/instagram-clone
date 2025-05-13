import React, { useState } from "react";
import RadioInput from "../../../../ui/radioInput/radioInput";
import styles from "./SettingContentPreferences.module.css";

const listSelectInput = [
  {
    title: "Less",
    description: "You might see less sensitive content.",
  },
  {
    title: "Standard",
    description: "You might see some sensitive content.",
  },
  {
    title: "More",
    description: "You might see more sensitive content.",
  },
];
const SettingContentPreferences = () => {
  const [childPage, setChildPage] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Standard");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={styles.SettingContentPreferencesWrapper}>
      {childPage ? (
        <div className={styles.sensitiveContentControl}>
          <h2 className="titleModalSettingItem">Sensitive content control</h2>
          <div className={styles.sensitiveContentControlDescription}>
            <div className="descriptionSetting">
              Sensitive content doesn't go against our Community Guidelines, but
              refers to topics some people may not want to see.
              <a
                href="https://help.instagram.com/251027992727268"
                className="linkHelp"
              >
                {" "}
                Learn more.
              </a>
            </div>
          </div>
          <div className={styles.sensitiveContentControlContainer}>
            <div className={styles.titleInputSelect}>
              Choose how much sensitive content to see:
            </div>
            <div className={styles.discriptionInputSelect}>
              <span className="descriptionSetting">
                This affects search results as well as recommended content in
                Explore, Reels, feed and hashtag pages. This also affects
                comments you see on other people's posts.
              </span>
            </div>
            <div className={styles.inputSelectWrapper}>
              <RadioInput
                name="sensitiveContent"
                options={listSelectInput.map((item) => item.title)}
                checked={selectedOption}
                onChange={handleOptionChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.SettingContentPreferences}>
          <h2 className="titleModalSettingItem">Content preferences</h2>
          <h3 className="subTitleItemSetting">
            Content from accounts you don't follow
          </h3>
          <div className={styles.contentPreferencesContainer}>
            <div
              onClick={() => setChildPage(!childPage)}
              className={styles.inputcontentPreferences}
            >
              <span>Sensitive content</span>
              <div className={styles.btnInputcontentPreferences}>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SettingContentPreferences;
