"use client";

import { useMemo } from "react";
import Image from "next/image";
import styles from "./PetalRain.module.css";

const FLOWER_IMAGES = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",
];

export default function PetalRain({ count = 18 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      src: FLOWER_IMAGES[i % FLOWER_IMAGES.length],
      left: (i * 5.5) % 100,
      delay: (i * 0.4) % 8,
      duration: 6 + (i % 6),
      size: 45 + (i % 35),
    }));
  }, [count]);

  return (
    <div className={styles.container}>
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={styles.petal}
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          <Image
            src={petal.src}
            alt="flower petal"
            width={petal.size}
            height={petal.size}
            style={{ objectFit: "contain" }}
          />
        </span>
      ))}
    </div>
  );
}
