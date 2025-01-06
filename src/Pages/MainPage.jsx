import { useState } from "react";
import "./MainPage.css";
import SelectionPage from "./SelectionPage";
import Menu from "./Menu";

export default function MainPage() {
  const [handleRoute, setHandleRoute] = useState(false);

  const handleSelection = () => {
    setHandleRoute(true); 
  };

  return (
    <div className="Main">
      {handleRoute ? (
        <SelectionPage/>
      ) : (
        <div className="Main-Page">
        <div className="Main-Items">
          <h1>
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h1>
          <button type="button" className="btn" onClick={handleSelection}>
            Acıktım
          </button>
        </div>
        </div>
      )}
      <Menu />
    </div>
  );
}
