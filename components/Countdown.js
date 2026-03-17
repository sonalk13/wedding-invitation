"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

export default function Countdown() {
  const [time, setTime] = useState({});

  useEffect(() => {
    const weddingDate = new Date("April 21 2026");

    const interval = setInterval(() => {
      const now = new Date();

      const diff = weddingDate - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      <h2 className={styles.title}>Countdown to Wedding</h2>

      <div className={styles.timer}>
        <div className={styles.timeBox}>
          <h1 className={styles.number}>{time.days}</h1>
          <p className={styles.label}>Days</p>
        </div>

        <div className={styles.timeBox}>
          <h1 className={styles.number}>{time.hours}</h1>
          <p className={styles.label}>Hours</p>
        </div>

        <div className={styles.timeBox}>
          <h1 className={styles.number}>{time.minutes}</h1>
          <p className={styles.label}>Minutes</p>
        </div>
      </div>
    </div>
  );
}
