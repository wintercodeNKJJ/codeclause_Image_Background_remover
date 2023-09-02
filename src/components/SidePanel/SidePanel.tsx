import React from "react";
import "./SidePanel.scss";

import ConvertStack from "./ConvertStack/ConvertStack";
import ConvertedStack from "./ConvertedStack/ConvertedStack";

const SidePanel = () => {
  return (
    <article className="sidepanel">
      <ConvertStack />
      <ConvertedStack />
    </article>
  );
};

export default SidePanel;
