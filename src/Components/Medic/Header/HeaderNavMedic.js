import React from "react";
import { useLocation } from "react-router";
import useMedia from "../../../Hooks/useMedia";
import { UserContext } from "../../../UserContext";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import styles from "./styles/HeaderNavMedic.module.css";

const HeaderNavMedic = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width:40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default HeaderNavMedic;
