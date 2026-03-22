"use client";
import styles from "./SectionDivider.module.css";
import SlideshowCircle from "./SlideshowCircle";

export default function SectionDivider({
  imageNeeded = true,
  fromColor = "#fdf6ee",
  toColor = "#f7ede0",
  gradient = null,
}) {
  const wrapperBackground = gradient ? `${gradient}, ${fromColor}` : fromColor;

  return (
    <div
      className={styles.dividerWrapper}
      style={{ background: wrapperBackground }}
    >
      <svg
        className={styles.wave}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Deep S-curve wave */}
        <path
          d="M0,160 C180,280 360,40 540,160 C720,280 900,40 1080,160 C1260,280 1380,100 1440,160 L1440,320 L0,320 Z"
          fill={toColor}
        />
      </svg>

      {imageNeeded && (
        <div className={styles.circleImage}>
          <SlideshowCircle />
        </div>
      )}
    </div>
  );
}
