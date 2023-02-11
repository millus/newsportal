import React from "react";
import { getAllPortals } from "../../helper/APIHelper";
import logo from "../../logo.svg";
import Header from "../Header/Header";
import Portal from "../Portal/Portal";
import "./App.css";

function App() {
  const [portalList, setPortalList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [portal, setPortal] = React.useState(null);

  React.useEffect(() => {
    getAllPortals().then((json) => {
      setPortalList(json.docs);
      setLoading(false);
    });
  }, [loading]);

  React.useEffect(() => {
    if (portalList.length > 0) {
      setPortal(portalList[0]);
    }
  }, [portalList]);

  function changePortal(portal) {
    setPortal(portal);
  }

  return (
    <div className="App">
      <Header portalList={portalList} changePortal={changePortal}></Header>
      {portal ? (
        <Portal portalId={portal.id}></Portal>
      ) : (
        <h2>Beklager ingen portaler tilgjengelig.</h2>
      )}
    </div>
  );
}

export default App;
