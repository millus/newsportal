import React from "react";
import styles from "./Header.module.css";

function Header({ portalList, changePortal, portal, contentRef }) {
  const firstImg = portal?.cover?.url;
  const [heading, setHeading] = React.useState("Nå");
  const [portalImg, setPortalImg] = React.useState(firstImg);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Nyhetsmeldinger</h1>
      <nav aria-label="portals" className={styles.wrapper}>
        {portalList.map((portal) => (
          <button
            style={
              portal.cover.url && {
                backgroundImage: `url(${portal?.cover?.url})`,
              }
            }
            className={styles.button}
            key={Math.random()}
            onClick={() => {
              changePortal(portal);
              setHeading(portal.name);
              setPortalImg(portal.cover.url);
              //   contentRef.current.scrollIntoView();
            }}
          >
            <span>{portal.name}</span>
          </button>
        ))}
      </nav>
      <h1 className={styles.heading}>{heading}</h1>
    </header>
  );
}

export default Header;
