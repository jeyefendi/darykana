import React from "react";
import styles from "../styles/Header.module.css";
import { TbPill } from "react-icons/tb";


const Header = () => {
  return (
    <nav>
      <TbPill size="3em"/>
      <ul className={styles.nav}>
        <li className={styles.tab}><a href="#">Сотрудничество</a></li>
        <li className={styles.tab}><a href="#">Войти</a></li>
      </ul>
    </nav>
  );
};

export default Header;
