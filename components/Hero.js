"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Sonal ❤️ Aman</h1>

        <p className={styles.inviteText}>
          Together with their families <br />
          invite you
        </p>

        <p className={styles.inviteHighlight}>to celebrate their wedding</p>

        <div className={styles.divider}></div>

        <p className={styles.date}>21 April 2026</p>

        <p className={styles.location}>Lucknow</p>
      </div>
    </section>
  );
}
