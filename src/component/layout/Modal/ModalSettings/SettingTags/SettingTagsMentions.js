import React from "react";
import RadioInput from "../../../../ui/radioInput/radioInput";
import styles from "./SettingTagsMentions.module.css";
const listSelectTagsMentions = [
  {
    title: "Who can tag you",
    description:
      "Choose who can tag you in their photos and videos. When people try to tag you, they'll see if you don't allow tags from everyone.",
    select: [
      "Allow tags from everyone",
      "Allow tags from people you follow",
      "Don't allow tags",
    ],
  },
  {
    select: "Manually approve tags",
  },
  {
    title: "Who can @mention you",
    description:
      "Choose who can @mention you to link your account in their stories, notes, comments, live videos, and captions. When people try to @mention you, they'll see if you don't allow @mentions.",
    select: [
      "Allow mentions from everyone",
      "Allow mentions from people you follow",
      "Don't allow mentions",
    ],
  },
];
const SettingTagsMentions = () => {
  return (
    <div className={styles.settingTagsMentions}>
      <h2 className="titleModalSettingItem">Tags and mentions</h2>
      {listSelectTagsMentions.map((item, index) => (
        <div className={styles.settingTagsMentionsItem} key={index}>
          {item.title && (
            <span className={styles.tagsMentionsItemTitle}>{item.title}</span>
          )}
          {item.description && (
            <div className={styles.tagsMentionsItemDescription}>
              <span className="descriptionSetting">{item.description}</span>
            </div>
          )}
          <div className={styles.selectInputTagsMentions}>
            {Array.isArray(item.select) ? (
              <RadioInput className={styles.radioTagsMemtions} options={item.select} name={`tagsMentions${index}`} />
            ) : (
              <div className={styles.selectInputTagsMentionsItem}>
                <span className={styles.selectInputTagsMentionsText}>{item.select}</span>
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SettingTagsMentions;
