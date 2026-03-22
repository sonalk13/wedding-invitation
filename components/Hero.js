"use client";

import styles from "./Hero.module.css";
import { WEDDING_DETAILS } from "@/constants/weddingDetails";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>{WEDDING_DETAILS.coupleNames}</h1>

        <p className={styles.inviteText}>
          Together with their families <br />
          invite you
        </p>

        <p className={styles.inviteHighlight}>to celebrate their wedding</p>

        <div className={styles.divider}></div>

        <p className={styles.date}>{WEDDING_DETAILS.weddingDate}</p>

        <p className={styles.location}>{WEDDING_DETAILS.weddingLocation}</p>
      </div>
    </section>
  );
}
