import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
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

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
            <div className={styles.sidebarHeader}>
            <div className={styles.sidebarLogoHead}>
                <div className={styles.logoSidebar}></div>
            </div>

            <ul className={styles.sidebarLinksHead}>
                {menuItems.map((item, index) => (
                    <li key={index} className={styles.sidebarLinkItem}>
                        <Link className={styles.iconAndName} to={item.path}>
                            <div className={styles.iconLinkSidebar}>
                                <i className={item.icon}></i>
                            </div>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>

            <ul className={styles.sidebarLinksFoot}>
                {menuItems2.map((item, index) => (
                    <li key={index} className={styles.sidebarLinkItem}>
                        <Link className={styles.iconAndName} to={item.path}>
                            <div className={styles.iconLinkSidebar}>
                                <i className={item.icon}></i>
                            </div>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
