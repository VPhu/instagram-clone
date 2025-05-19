import Footer from "../../component/layout/Footer/Footer";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import MainHome from "../../component/layout/Main/MainHome/MainHome";
import SidebarMore from "../../component/layout/Sidebar/SidebarMore/SidebarMore";
import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <div className={styles.wrapperHome}>
      <Sidebar />
      <div className={styles.containerHome}>
        <div className={styles.mainHome}>
          <MainHome />
          <SidebarMore />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
