"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* CURVE DIVIDER */}
      {/* <svg
        className={styles.wave}
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C400,140 1000,20 1440,80 L1440,0 L0,0 Z"
          fill="rgb(8,8,8)"
        />
      </svg> */}

      <div className={styles.footer}>
        <p>
          Made with <span className={styles.heart}>❤️</span> for the Wedding
        </p>

        <p className={styles.author}>By CD Works</p>
        <a
          href="https://tally.so/r/aQGVGZ"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.enquiryBtn}
        >
          Enquire →
        </a>
      </div>
    </footer>
  );
}
