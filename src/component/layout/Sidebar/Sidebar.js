import React, { useEffect, useCallback, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import SearchComponent from "../Modal/ModalSearch/ModalSearch";
import NotifComponent from "../Modal/ModalNotifications/ModalNotifications";
import PostModal from "../Modal/ModalCreate/PostModal/PostModal";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  { name: "Home", icon: "fas fa-house", path: "/" },
  { name: "Search", icon: "fas fa-search", path: "/search", modal: "search" },
  { name: "Explore", icon: "fa-regular fa-compass", path: "/explore" },
  { name: "Reels", icon: "fa-regular fa-circle-play", path: "/reels" },
  { name: "Messages", icon: "fa-regular fa-paper-plane", path: "/messages" },
  {
    name: "Notifications",
    icon: "fa-regular fa-heart",
    path: "/notifications",
    modal: "notifications",
  },
  { name: "Create", icon: "fa-regular fa-square-plus", path: "/create" },
  { name: "Profile", icon: "fa-regular fa-circle-user", path: "/profile" },
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
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false)
  const modalRef = useRef();

  const handleSidebarModal = useCallback(
    (modalName) => {
      if (modal === modalName) {
        setModal("");
      } else {
        setModal(modalName);
      }
    },
    [modal]
  );

  const handleCreateModal = () => {
    setIsCreateModalOpen((prev) => !prev);
  };

  const handlePostModal = () => {
    setIsPostModalOpen(true);
  };
  const handleClosePostModal = () => {
    setIsPostModalOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal("");
        setIsCreateModalOpen(false);
      }
    };

    if (modal || isCreateModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal, isCreateModalOpen]);

  const renderNavItem = (item) => {
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
        {!modal && (
          <div className={styles.sidebarLogoHead}>
            <div className={styles.logoSidebar}></div>
          </div>
        )}
        {modal && (
          <div className={styles.sidebarLogo}>
            <div className={styles.iconLogo}>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <ul className={styles.sidebarWrapper}>
          {renderLogo()}
          {menuItems.map((item, index) => (
            <li
              className={`${styles.sidebarLinkItem} ${
                modal === item.modal ? styles.activeItemNav : ""
              }`}
              key={index}
            >
              {item.name === "Create" ? (
      <button
        className={styles.itemNavBtn}
        onClick={handleCreateModal}
      >
        {renderNavItem(item)}
      </button>
    ) : item.modal ? (
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
                <i className={`${item.icon} ${styles.iconCustom}`} />
                {!modal && (
                  <span className={styles.itemNavName}>{item.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isCreateModalOpen && (
        <div className={styles.createModalContent} ref={modalRef}>
            <div className={styles.createPostModal} onClick={handlePostModal}>
              <span className={styles.createPostModalText}>Post</span>
              <div className={styles.createPostModalIcon}>
                <i class="fa-regular fa-images"></i>
              </div>
            </div>
            <div onClick={() => window.location.href = "https://copilot.microsoft.com/"} className={styles.createAiModal}>
              <span className={styles.createAiModalText}>AI</span>
              <div className={styles.createAiModalIcon}>
                <i class="fa-solid fa-o"></i>
              </div>
            </div>
          </div>
      )}

        {isPostModalOpen && (
        <div className={styles.postModal} ref={modalRef}>
          <PostModal onClose={handleClosePostModal}/>
        </div>
      )}

      <div className={styles.modalSidebar} ref={modalRef}>
        {modal === "search" && <SearchComponent />}
        {modal === "notifications" && <NotifComponent />}
      </div>
    </aside>
  );
};

export default Sidebar;
