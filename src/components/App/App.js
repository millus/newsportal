import React from "react";
import { getAllPortals } from "../../helper/APIHelper";
import logo from "../../logo.svg";
import NewsArticle from "../NewsArticle/NewsArticle";
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
      {portalList.map(portal => (
        <button key={Math.random()} onClick={() => changePortal(portal)}>{portal.name}</button>
      ))}
      {portal && <Portal portalId={portal.id}></Portal>}
    </div>
  );
}

export default App;
