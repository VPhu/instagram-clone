import React from "react";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import { Link, useParams } from "react-router-dom";
import SettingNotifications from "../../component/layout/Modal/ModalSettings/SettingNotifications/SettingNotifications";
import SettingEditProfile from "../../component/layout/Modal/ModalSettings/SettingEditProfile/SettingEditProfile";
import SettingAccountPrivacy from "../../component/layout/Modal/ModalSettings/SettingAccountPrivacy/SettingAccountPrivacy.js"
import SettingCloseFriends from "../../component/layout/Modal/ModalSettings/SettingCloseFriends/SettingCloseFriends.js";
import SettingBlocked from "../../component/layout/Modal/ModalSettings/SettingBlocked/SettingBlocked.js"
import SettingHideStoryLive from "../../component/layout/Modal/ModalSettings/SettingHideStoryLive/SettingHideStoryLive.js";
import SettingMessagesStory from "../../component/layout/Modal/ModalSettings/SettingMessagesStory/SettingMessagesStory.js";
import SettingTagsMentions from "../../component/layout/Modal/ModalSettings/SettingTags/SettingTagsMentions.js";
import SettingComments from "../../component/layout/Modal/ModalSettings/SettingComments/SettingComments.js";
import SettingSharing from "../../component/layout/Modal/ModalSettings/SettingSharing/SettingSharing.js";
import SettingRestricted from "../../component/layout/Modal/ModalSettings/SettingRestricted/SettingRestricted.js";
import SettingMuted from "../../component/layout/Modal/ModalSettings/SettingMuted/SettingMuted.js";
import SettingHiddenWords from "../../component/layout/Modal/ModalSettings/SettingHiddenWords/SettingHiddenWords.js";
import SettingContentPreferences from "../../component/layout/Modal/ModalSettings/SettingContentPreferences/SettingContentPreferences.js";
import SettingLikeShareCounts from "../../component/layout/Modal/ModalSettings/SettingLikeShareCounts/SettingLikeShareCounts.js";
import Footer from "../../component/layout/Footer/Footer";
import styles from "./AccountSettings.module.css";

const AccountSettings = () => {
  const { nameLink } = useParams();
  

  const dataList = [
    {
      section: "How you use Instagram",
      items: [
        {
          name: "Edit profile",
          path: "/account/edit",
          icon: <i class="fa-regular fa-circle-user"></i>,
        },
        {
          name: "Notifications",
          path: "/account/notifications",
          icon: <i class="fa-regular fa-bell"></i>,
        },
      ],
    },
    {
      section: "Who can see your content",
      items: [
        {
          name: "Account privacy",
          path: "/account/privacy",
          icon: <i class="fa-solid fa-lock"></i>,
        },
        {
          name: "Close Friends",
          path: "/account/friends",
          icon: <i class="fa-regular fa-star"></i>,
        },
        {
          name: "Blocked",
          path: "/account/blocked",
          icon: <i class="fa-solid fa-ban"></i>,
        },
        {
          name: "Hide story and live",
          path: "/account/hide",
          icon: <i class="fa-solid fa-slash"></i>,
        },
      ],
    },
    {
      section: "How others can interact with you",
      items: [
        {
          name: "Messages and story replies",
          path: "/account/messages",
          icon: <i class="fa-regular fa-comment-dots"></i>,
        },
        {
          name: "Tags and mentions",
          path: "/account/tags",
          icon: <i class="fa-solid fa-at"></i>,
        },
        {
          name: "Comments",
          path: "/account/comments",
          icon: <i class="fa-regular fa-comment"></i>,
        },
        {
          name: "Sharing and reuse",
          path: "/account/sharing",
          icon: <i class="fa-solid fa-arrows-spin"></i>,
        },
        {
          name: "Restricted accounts",
          path: "/account/restricted",
          icon: <i class="fa-solid fa-user-large-slash"></i>,
        },
        {
          name: "Hidden Words",
          path: "/account/hidden",
          icon: <i class="fa-solid fa-font"></i>,
        },
      ],
    },
    {
      section: "What you see",
      items: [
        {
          name: "Muted accounts",
          path: "/account/muted",
          icon: <i class="fa-regular fa-bell-slash"></i>,
        },
        {
          name: "Content preferences",
          path: "/account/content_preferences",
          icon: <i class="fa-regular fa-images"></i>,
        },
        {
          name: "Like and share counts",
          path: "/account/counts",
          icon: <i class="fa-solid fa-heart-circle-plus"></i>,
        },
        {
          name: "Subscriptions",
          path: "/account/hide",
          icon: <i class="fa-solid fa-crown"></i>,
        },
      ],
    },
  ];

  return (
    <div className={styles.settingsWrapper}>
      <Sidebar />
      <div className={styles.settingsAccount}>
        <div className={styles.sidebarSettings}>
          <h3 className={styles.titleSidebarSettings}>Settings</h3>
          {dataList.map((section, index) => (
            <div key={index} className={styles.installationGroup}>
              <p className={styles.sectionTitle}>{section.section}</p>
              <ul className={styles.menuList}>
                {section.items.map((item, index) => (
                  <li className={styles.ItemSetting} key={index}>
                    <Link to={item.path} className={styles.menuLink}>
                      <div className={styles.iconMenuItemSetting}>
                        {item.icon}
                      </div>
                      <div className={styles.nameMenuItemSetting}>
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.settingsItemWrapper}>
          <div className={styles.settingsItemContainer}>
            <div className={styles.contentPlaceholder}>
              {nameLink === "edit" && (
                <SettingEditProfile/>
              )}
              {nameLink === "notifications" && (
                <SettingNotifications/>
              )}
              {nameLink === "privacy" && (
                <SettingAccountPrivacy/>
              )}
              {nameLink === "friends" && (
                <SettingCloseFriends/>
              )}
              {nameLink === "blocked" && (
                <SettingBlocked/>
              )}
              {nameLink === "hide" && (
                <SettingHideStoryLive/>
              )}
              {nameLink === "messages" && (
                <SettingMessagesStory/>
              )}
              {nameLink === "tags" && (
                <SettingTagsMentions/>
              )}
              {nameLink === "comments" && (
                <SettingComments/>
              )}
              {nameLink === "sharing" && (
                <SettingSharing/>
              )}
              {nameLink === "restricted" && (
               <SettingRestricted/>
              )}
              {nameLink === "hidden" && (
                <SettingHiddenWords/>
              )}
              {nameLink === "hidden/comment_filtering" && (
                <SettingHiddenWords/>
              )}
              {nameLink === "muted" && (
                <SettingMuted/>
              )}
              {nameLink === "content_preferences" && (
                <SettingContentPreferences/>
              )}
              {nameLink === "counts" && (
                <SettingLikeShareCounts/>
              )}
              {!nameLink && <p>No information from this page yet</p>}
            </div>
          </div>
                <Footer/>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
