"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./SlideshowCircle.module.css";

const IMAGES = [
  "/slideshow-1.jpeg",
  "/slideshow-2.jpeg",
  "/slideshow-3.jpeg",
  "/slideshow-4.jpeg",
  "/slideshow-5.jpeg",
  "/slideshow-6.jpeg",
  "/slideshow-7.jpeg",
  "/slideshow-8.jpeg",
  "/slideshow-9.jpeg",
  "/slideshow-10.jpeg",
  "/slideshow-11.jpeg",
];

export default function SlideshowCircle() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % IMAGES.length);
        setFading(false);
      }, 400); // fade out duration
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.circle}>
      <Image
        src={IMAGES[current]}
        alt={`couple photo ${current + 1}`}
        fill
        className={`${styles.image} ${fading ? styles.fadeOut : styles.fadeIn}`}
        sizes="120px"
      />
    </div>
  );
}
