// LoadingBar.jsx
import React from "react";
import styles from "../../css/LoadingBar.module.css"; // import the CSS

function LoadingBar() {
  return (
    <div className={styles.loadingBar}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

export default LoadingBar;
