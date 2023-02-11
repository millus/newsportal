import React from "react";
import styles from "./Header.module.css";

function Header({ portalList, changePortal, portal }) {
  const [heading, setHeading] = React.useState("Nå");

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Nyhetsmeldinger</h1>
      <nav aria-label="portals" className={styles.wrapper}>
        {portalList.map((portal) => (
          <button
            className={styles.button}
            key={Math.random()}
            onClick={() => {
              changePortal(portal);
              setHeading(portal.name);
            }}
          >
            {portal.name}
          </button>
        ))}
        <h1 className={styles.heading}>{heading}</h1>
      </nav>
      
    </header>
  );
}

export default Header;
