import React, { useEffect, useCallback, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import SearchComponent from "../Modal/ModalSearch/ModalSearch";
import NotifComponent from "../Modal/ModalNotifications/ModalNotifications";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
    { name: "Home", icon: "fas fa-house", path: "/" },
    { name: "Search", icon: "fas fa-search", path: "/search" },
    { name: "Explore", icon: "fas fa-compass", path: "/explore" },
    { name: "Reels", icon: "fas fa-clapperboard", path: "/reels" },
    { name: "Messages", icon: "fas fa-envelope", path: "/messages" },
    { name: "Notifications", icon: "fas fa-bell", path: "/notifications" },
    { name: "Create", icon: "fas fa-square-plus", path: "/create" },
    { name: "Profile", icon: "fas fa-user", path: "/profile" },
];
const menuItems2 = [
    { name: "AI Studio", icon: "fa-solid fa-microchip", path: "/ai" },
    { name: "Threads", icon: "fa-brands fa-threads", path: "/threads" },
    { name: "More", icon: "fas fa-bars", path: "/more" },
    
]
const Sidebar = () => {
    return (
      <>
        <i className={`${item.icon} ${styles.iconCustom}`} />
        {!modal && <span className={styles.itemNavName}>{item.name}</span>}
      </>
    );
  };
  const renderLogo = () => {
    return (
      <div>
        {!modal && <div className={styles.sidebarLogoHead}>             
              <div className={styles.logoSidebar}></div>
          </div>}
          {modal && <div className={styles.sidebarLogo}>
                <div className={styles.iconLogo}>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>}
      </div>
    )
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <ul className={styles.sidebarWrapper}>
          {renderLogo()}
          {menuItems.map((item, index) => (
            <li className={`${styles.sidebarLinkItem} ${modal === item.modal ? styles.activeItemNav : ""}`}
            key={index}>
              {item.modal ? (
                <button className={styles.itemNavBtn} onClick={() => handleSidebarModal(item.modal)}>
                  {renderNavItem(item)}
                </button>
              ) : (
                <Link className={styles.itemNavLink} to={item.path}>{renderNavItem(item)}</Link>
              )}
            </li>
          ))}
        </ul>

        <ul className={styles.sidebarWrapper}>
      {menuItems2.map((item, index) => (
        <li className={styles.sidebarLinkItem} key={index}>
          <Link className={styles.itemNavLink} to={item.path}>
            <i className={`${item.icon} ${styles.iconCustom}`} />
            {!modal && <span className={styles.itemNavName}>{item.name}</span>}
          </Link>
        </li>
      ))}
    </ul>

      </div>
      <div className={styles.modalSidebar} ref={modalRef}>
        {modal === "search" && <SearchComponent />}
        {modal === "notifications" && <NotifComponent />}
      </div>
    </aside>
  );
};

export default Sidebar;
