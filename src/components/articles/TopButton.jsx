import React from "react";
import { GRAY900 } from "../../styles/theme";

const TopButton = () => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        right: "28px",
        bottom: "28px",
        backgroundColor: GRAY900,
        width: "56px",
        height: "56px",
        color: "white",
        borderRadius: "4px",
      }}
    >
      Top
    </button>
  );
};

export default TopButton;
