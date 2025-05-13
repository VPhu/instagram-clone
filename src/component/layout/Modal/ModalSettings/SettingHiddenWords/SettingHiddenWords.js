import React, { useState } from "react";
import SwitchButton from "../../../../ui/btnSwitch/btnSwitch";
import styles from "./SettingHiddenWords.module.css";

const listSettingHiddenWords = [
  {
    subTitle: "Unwanted comments and message requests",
    selectInput: [
      {
        textItem: "Hide comments",
        descriptionItem:
          "Comments that are potentially offensive, misleading or spam will be moved to a separate section. Anyone can see these comments, and you can unhide comments on your own posts at anytime.",
        heplink: " Learn more",
        linkchange: "https://help.instagram.com/700284123459336",
      },
      {
        textItem: "Advanced comment filtering",
        descriptionItem:
          "Even more comments that meet our criteria will automatically be hidden.",
      },
      {
        textItem: "Hide message requests",
        descriptionItem:
          "Message requests that may be offensive, spam or scams will be moved to the Hidden requests folder. We'll also filter notifications for these messages. This feature is not currently supported on web or Meta Quest.",
      },
    ],
  },
  {
    subTitle: "Custom words for messages and comments",
    selectInput: [
      {
        textItem: "Manage custom words and phrases",
        changePage: "comment_filtering",
      },
      {
        textItem: "Hide comments",
        descriptionItem:
          "Comments that contain words, phrases or emojis on your custom list and similar misspellings will be filtered out so they are only visible to the authors.",
      },
      {
        textItem: "Hide message requests",
        descriptionItem:
          "Message requests that contain words from your list will be hidden. This feature is not currently supported on web or Meta Quest.",
      },
    ],
  },
];

const SettingHiddenWords = () => {
  const [currentPage, setCurrentPage] = useState("main");

  const handleNavigate = (page) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={styles.settingHiddenWords}>
      {currentPage === "main" ? (
        <div className={styles.hiddenWordsContainer}>
          <h2 className="titleModalSettingItem">Hidden Words</h2>
          {listSettingHiddenWords.map((item, index) => (
            <div className={styles.hiddenWordsItemWrapper} key={index}>
              <h3 className="subTitleItemSetting">{item.subTitle}</h3>
              <div className={styles.hiddenWordsItem}>
                {item.selectInput.map((option, idx) => (
                  <div
                    className={`${styles.hiddenWordsSelectInput} ${
                      option.changePage ? styles.cursorPointer : ""
                    }`}
                    key={idx}
                    onClick={() => option.changePage && handleNavigate(option.changePage)}
                  >
                    <div className={styles.textSelectInput}>
                      <span className={styles.titleSelectInput}>
                        {option.textItem}
                      </span>
                      <div className="descriptionSetting">
                        {option.descriptionItem}
                        {option.heplink && (
                          <a href={option.linkchange} className="linkHelp">
                            {option.heplink}
                          </a>
                        )}
                      </div>
                    </div>
                    {option.changePage ? (
                      <div className={styles.btnChangeSelectInput}>
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    ) : (
                      <div className={styles.btnSelectInput}>
                        <SwitchButton />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.commentFilteringContainer}>
          <div className={styles.headerCommentFiltering}>
            <button
              className={styles.backButton}
              onClick={() => setCurrentPage("main")}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <h2 className="titleModalSettingItem">Comment Filtering</h2>
          </div>
          <div className={styles.commentFilteringContent}>
            <div className={styles.filteringSection}>
                <h3 className={styles.subTitlecommentFiltering}>Keyword filters</h3>
              <p>
                Hide comments that contain any of the words or phrases you type above from your posts.
              </p>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Add keywords, separated by commas"
                  className={styles.inputField}
                />
                <div className={styles.addButtonWrapper}>
                <button className={styles.addButton}>submit</button>
                </div>
              </div>
              <div className={styles.selectInputSwitch}>
                <span className={styles.switchText}>Hide Comments</span>
                <SwitchButton/>
              </div>
              <div className={styles.descriptionCommentFiltering}>
                <span className="descriptionSetting">Hide comments that contain commonly reported keywords from your posts.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingHiddenWords;
