"use client";

import styles from "./SectionDivider.module.css";

export default function SectionDivider({ imageNeeded = true }) {
  return (
    <div className={styles.dividerWrapper}>
      <svg
        className={styles.wave}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C360,160 1080,0 1440,80 L1440,200 L0,200 Z"
          fill="rgb(208,169,196)"
        />
      </svg>

      {imageNeeded && (
        <div className={styles.circleImage}>
          <img src="/couple.jpg" alt="couple" />
        </div>
      )}
    </div>
  );
}
