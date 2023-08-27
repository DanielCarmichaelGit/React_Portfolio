import React from "react";
import { useLocation } from "react-router-dom";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import styles from "../../css/StickyCircleButton.module.css";

const StickyCircleButton = ({ onClick, children }) => {
  const location = useLocation();
  
  return (
    <button
      className={styles.stickyButton}
      onClick={() => onClick(location.pathname)}
    >
      {<QuestionMarkIcon />}
    </button>
  );
};

export default StickyCircleButton;
