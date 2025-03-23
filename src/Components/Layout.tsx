import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaClipboard,
  FaPlus,
  FaRobot,
} from "react-icons/fa";
import styles from "../css/Layout.module.css";
import { handleLogout } from "../utiles/authHelpers";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    await handleLogout(navigate);
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.topBar}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/profile" className={styles.navLink}>
                <FaUser className={styles.icon} /> Profile
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/all-posts" className={styles.navLink}>
                <FaClipboard className={styles.icon} /> Posts
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/create-post" className={styles.navLink}>
                <FaPlus className={styles.icon} /> Create Posts
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/chatgpt" className={styles.navLink}>
                <FaRobot className={styles.icon} /> ChatGPT
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
