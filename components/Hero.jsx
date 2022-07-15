import React from "react";
import styles from "../styles/Hero.module.css";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <main>
      <div className={styles.hero}>
        <h1>Darykana</h1>
        <h3>Поиск лекарств по самой низкой цене в ближайшей аптеке</h3>
        <div className={styles.search}>
          <div className={styles.input}>
            <FiSearch color="rgba(27, 31, 59, 0.4)" size="1.5em" />
            <input type="text" placeholder="Поиск лекарств..." />
          </div>
          <button>Найти</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
