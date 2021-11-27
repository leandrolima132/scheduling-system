import React from "react";
import HeaderNavMedic from "./HeaderNavMedic";
import styles from "./styles/HeaderMedic.module.css";

const HeaderMedic = () => {
  return (
    <header className={styles.header}>
      <h1 className="title">Dashborad</h1>
      <HeaderNavMedic />
    </header>
  );
};

export default HeaderMedic;
