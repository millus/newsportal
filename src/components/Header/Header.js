import React from "react";
import styles from "./Header.module.css";

function Header({portalList, changePortal}) {
  return (
    <>
      {" "}
      {portalList.map((portal) => (
        <button key={Math.random()} onClick={() => changePortal(portal)}>
          {portal.name}
        </button>
      ))}
    </>
  );
}

export default Header;
