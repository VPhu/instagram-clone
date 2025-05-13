import React, { useState } from "react";
import RadioGroup from "../../../../ui/radioGroup/radioGroup";
import Switch from "../../../../ui/btnSwitch/btnSwitch";
import styles from "./SettingMessagesStory.module.css";

const listSelectStoryReplies = [
  {
    title: "Who can reply to your stories",
    itemselect: ["Everyone", "People You Follow", "Off"],
  },
];
const SettingMessagesStory = () => {
  const [selectMessagesStoryItem, setSelectMessagesStoryItem] = useState(null);
  return (
    <div className={styles.settingMessagesStory}>
      <h2 className="titleModalSettingItem">
        {selectMessagesStoryItem === null
          ? "Messages and story replies"
          : selectMessagesStoryItem === "message"
          ? "Message controls"
          : selectMessagesStoryItem === "story"
          ? "Story replies"
          : "Activity status"}
      </h2>

      {!selectMessagesStoryItem && (
        <div className={styles.messagesStoryContainer}>
          <div className={styles.messagesStoryItem}>
            <div className={styles.messagesStoryItemTitle}>
              <h3 className="subTitleItemSetting">How people can reach you</h3>
            </div>
            <div className={styles.messagesStoryItemSelect}>
              <div
                onClick={() => setSelectMessagesStoryItem("message")}
                className={styles.messagesStoryItemSelectFirst}
              >
                <span className={styles.messagesStoryItemSelectText}>
                  Message controls
                </span>
                <div className={styles.messagesStoryItemSelectIcon}>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div
                onClick={() => setSelectMessagesStoryItem("story")}
                className={styles.messagesStoryItemSelectEnd}
              >
                <span className={styles.messagesStoryItemSelectText}>
                  Story replies
                </span>
                <div className={styles.messagesStoryItemSelectIcon}>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.messagesStoryItem}>
            <div className={styles.messagesStoryItemTitle}>
              <h3 className="subTitleItemSetting">Who can see you're online</h3>
              <div
                onClick={() => setSelectMessagesStoryItem("activity")}
                className="inputSelectSetting"
              >
                <span className="inputSelectSettingText">
                  Show activity status
                </span>
                <div className="inputSelectSettingIcon">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectMessagesStoryItem === "message" && (
        <div className={styles.containerItemMessgesStory}>
          <div className={styles.descriptionItemMessgesStory}>
            <span className="descriptionSetting">
              People you follow or have chatted with before can always message
              you unless you block them. When anyone else sends you a message,
              you can receive it as a message request that you can accept or
              delete.
            </span>
            <span className="linkHelp">
              Learn more about who can message you
            </span>
          </div>
          <div className={styles.selectItemMessgesStory}>
            <div className={styles.titleSelectItemMessgesStory}>
              Your followers on Instagram
            </div>
            <div className={styles.descriptionSelectItemMessgesStory}>
              <span className="descriptionSetting">
                Message requests from people who follow you on Instagram will be
                delivered to your Message requests folder unless you choose not
                to receive them.
              </span>
            </div>
            <div className="inputSelectItemMessgesStory">
              <div className={styles.messagesStoryItemSelect}>
                <div className={styles.messagesStoryItemSelectFirst}>
                  <span className={styles.messagesStoryItemSelectText}>
                    Message request
                  </span>
                  <label className={styles.radioOption}>
                    <input type="radio" />
                  </label>
                </div>
                <div className={styles.messagesStoryItemSelectEnd}>
                  <span className={styles.messagesStoryItemSelectText}>
                    Don't receive requests
                  </span>
                  <label className={styles.radioOption}>
                    <input type="radio" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.selectItemMessgesStory}>
            <div className={styles.titleSelectItemMessgesStory}>
              Others on Instagram
            </div>
            <div className={styles.descriptionSelectItemMessgesStory}>
              <span className="descriptionSetting">
                Message requests from other accounts on Instagram will be
                delivered to your Message requests folder unless you choose not
                to receive them.
              </span>
            </div>
            <div className="inputSelectItemMessgesStory">
              <div className={styles.messagesStoryItemSelect}>
                <div className={styles.messagesStoryItemSelectFirst}>
                  <span className={styles.messagesStoryItemSelectText}>
                    Message request
                  </span>
                  <label className={styles.radioOption}>
                    <input type="radio" />
                  </label>
                </div>
                <div className={styles.messagesStoryItemSelectEnd}>
                  <span className={styles.messagesStoryItemSelectText}>
                    Don't receive requests
                  </span>
                  <label className={styles.radioOption}>
                    <input type="radio" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.selectItemMessgesStory}>
            <div className={styles.titleSelectItemMessgesStory}>
              Who can add you to group chats
            </div>
            <div className="inputSelectItemMessgesStory">
              <div className={styles.messagesStoryItemSelect}>
                <div className={styles.messagesStoryItemSelectFirst}>
                  <div className={styles.messagesStoryItemSelectTextWrapper}>
                    <span className={styles.messagesStoryItemSelectText}>
                      Message request
                    </span>
                    <span className="descriptionSetting">
                      You can be added to group chats by everyone, except by
                      people you've blocked.
                    </span>
                  </div>
                  <label className={styles.radioOption}>
                    <input type="radio" />
                  </label>
                </div>
                <div className={styles.messagesStoryItemSelectEnd}>
                  <div className={styles.messagesStoryItemSelectTextWrapper}>
                    <span className={styles.messagesStoryItemSelectText}>
                      Don't receive requests
                    </span>
                    <span className="descriptionSetting">
                      People you follow or have messaged before can add you to
                      group chats.
                    </span>
                  </div>
                  <label className={styles.radioOption}>
                    <input type="radio" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectMessagesStoryItem === "story" && (
        <div className={styles.containerItemMessgesStory}>
          <h3 className="subTitleItemSetting">Who can reply to your stories</h3>
          <div className={styles.storyRepliesContainer}>
            <div className={styles.radioGroup}>
              <RadioGroup
                name="storyReplies"
                options={listSelectStoryReplies[0].itemselect}
              />
            </div>
          </div>
        </div>
      )}
      {selectMessagesStoryItem === "activity" && (
        <div className={styles.containerItemMessgesStory}>
          <div className={styles.selectSwitchItem}>
            <span className={styles.selectSwitchItemText}>
              Show activity status
            </span>
            <Switch />
          </div>
          <div className={styles.descriptionItemActivity}>
            <div className="descriptionSetting">
              Allow accounts you follow and anyone you message to see when you
              were last active or are currently active on Instagram. When this
              is turned off, you won't be able to see the activity status of
              other accounts. <span className="linkHelp">Learn more</span>
            </div>
          </div>
          <div className={styles.descriptionItemActivity}>
            <div className="descriptionSetting">
              You can continue to use our services if active status is off.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SettingMessagesStory;
