import React from "react";
import RadioGroup from "../../../../ui/radioGroup/radioGroup";
import Switch from "../../../../ui/btnSwitch/btnSwitch"
import styles from "./SettingComments.module.css";

const listSettingComments = [
  {
    title: "Allow comments from",
    description: ["", "87 People", "109 People", "169 People"],
    type:"comments",
    select: [
      "Everyone",
      "People you follow",
      "Your followers",
      "People you follow and your followers"
    ],
  },
];
const SettingComments = () => {
  return (
    <div className={styles.settingComments}>
      <h2 className="titleModalSettingItem">Comments</h2>
      <div className={styles.settingCommentsContainer}>
        {listSettingComments.map((item, index)=> (
            <div className={styles.settingCommentsItem}>
          <span className={styles.subTitleSettingComments}>
            {item.title}
          </span>
          <RadioGroup typeRadio={item.type} options={item.select} description={item.description} name={`settingComments${index}`}/>
        </div>
        ))}
        <div className={styles.settingCommentsSwitch}>
            <span className={styles.commentsSwitchText}>Allow GIF comments</span>
            <Switch/>
        </div>
        <div className={styles.settingCommentsDescription}>
            <span className="descriptionSetting">People will be able to comment GIFs on your posts and reels.</span>
        </div>
      </div>
    </div>
  );
};
export default SettingComments;
