import React, { useState } from "react";
import LeftHeaderPart from "./leftHeader/LeftHeaderPart";
import NavLinksContainer from "./NavLinksContainer";
import RightHeaderPart from "./rightHeader/RightHeaderPart";
import MobileSearchBarContainer from "../mobileSearch/MobileSearchBarContainer";

function Header() {
  const [searchActive, setActive] = useState(false);
  return (
    <div id="main-header">
      <div className="header-container">
        {!searchActive ? (
          <>
            <LeftHeaderPart toggle={() => setActive(true)} />
            <div className="dual_container">
              <NavLinksContainer />
              <RightHeaderPart />
            </div>
          </>
        ) : (
          <MobileSearchBarContainer toggle={() => setActive(false)} />
        )}
      </div>
    </div>
  );
}

export default Header;
