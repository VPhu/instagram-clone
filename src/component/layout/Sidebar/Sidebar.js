import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import SearchComponent from "../Modal/ModalSearch/ModalSearch";
import NotifComponent from "../Modal/ModalNotifications/ModalNotifications";
import useOutsideClick from "../../../hooks/useClickOutside";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  { name: "Home", icon: "fas fa-house", path: "/", mobile: true },
  { name: "Search", icon: "fas fa-search", path: "/search", modal: "search" },
  {
    name: "Explore",
    icon: "fa-regular fa-compass",
    path: "/explore",
    mobile: true,
  },
  {
    name: "Reels",
    icon: "fa-regular fa-circle-play",
    path: "/reels",
    mobile: true,
  },
  { name: "Messages", icon: "fa-regular fa-paper-plane", path: "/messages" },
  {
    name: "Notifications",
    icon: "fa-regular fa-heart",
    path: "/notifications",
    modal: "notifications",
  },
  {
    name: "Create",
    icon: "fa-regular fa-square-plus",
    path: "/create",
    mobile: true,
  },
  {
    name: "Profile",
    icon: "fa-regular fa-circle-user",
    path: "/profile",
    mobile: true,
  },
];
const menuItems2 = [
  {
    name: "AI Studio",
    icon: "fa-regular fa-circle",
    path: "/ai",
  },
  { name: "Threads", icon: "fa-brands fa-threads", path: "/threads" },
  { name: "More", icon: "fas fa-bars", path: "/more" },
];

const Sidebar = () => {
  const [modal, setModal] = useState("");

  const handleCloseExpander = () => {
    if (modal) {
      setModal("");
    }
  };

  const modalRef = useOutsideClick(handleCloseExpander);

  const handleSidebarModal = (type) => {
    setModal((prev) => (prev === type ? "" : type));
  };

  const renderNavItem = (item) => {
    return (
      <>
        <i className={`${item.icon} ${styles.iconCustom}`} />
        <span
          className={`${styles.itemNavName} ${
            modal ? styles.itemNameToggle : ""
          }`}
        >
          {item.name}
        </span>
      </>
    );
  };

  return (
    <div
      ref={modalRef}
      className={`${styles.sidebar} ${
        modal ? styles.sidebarContainerChange : ""
      }`}
    >
      <div className={styles.sidebarContainer}>
        <ul className={styles.sidebarWrapper}>
          <Link to="/" className={styles.sidebarLogo}>
            <div
              className={`${styles.iconLogo} ${
                modal ? styles.changeIconLogo : ""
              }`}
            >
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div
              className={`${styles.sidebarLogoHead} ${
                modal ? styles.changeLogoImg : ""
              }`}
            >
              <div className={styles.logoSidebar}></div>
            </div>
          </Link>
          {menuItems.map((item, index) => (
            <li
              className={`${styles.sidebarLinkItem} ${
                modal === item.modal ? styles.activeItemNav : ""
              }`}
              key={index}
            >
              {item.modal ? (
                <button
                  className={styles.itemNavBtn}
                  onClick={() => handleSidebarModal(item.modal)}
                >
                  {renderNavItem(item)}
                </button>
              ) : (
                <Link className={styles.itemNavLink} to={item.path}>
                  {renderNavItem(item)}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <ul className={styles.sidebarWrapper}>
          {menuItems2.map((item, index) => (
            <li className={styles.sidebarLinkItem} key={index}>
              <Link className={styles.itemNavLink} to={item.path}>
                {renderNavItem(item)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SearchComponent modal={modal === "search"} />
        <NotifComponent modal={modal === "notifications"} />
      </div>
      <div className={styles.sidebarMobile}>
        {menuItems.map((item, index) =>
          item.mobile ? (
            <div className={styles.sidebarMobileItem} key={index}>
              <i className={item.icon}></i>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Sidebar;
