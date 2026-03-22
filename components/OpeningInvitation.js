"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./OpeningInvitation.module.css";
import Image from "next/image";
import { WEDDING_DETAILS } from "@/constants/weddingDetails";

export default function OpeningInvitation({ onOpen }) {
  const [phase, setPhase] = useState("idle");
  const audioRef = useRef(null);

  /* Lock scroll while card is visible, unlock when done */
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    /* Cleanup in case component unmounts mid-animation */
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const handleOpen = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    audioRef.current?.play();

    setTimeout(() => {
      setPhase("done");
      onOpen?.();
    }, 1400);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            className={styles.wrapper}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className={styles.bg} />

            <div className={styles.scene} onClick={handleOpen}>
              <motion.div
                className={styles.card}
                animate={
                  phase === "opening" || phase === "done"
                    ? { rotateY: -175 }
                    : { rotateY: 0 }
                }
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className={styles.cardFront}>
                  <div className={styles.borderDecor} />
                  <Image
                    src="/lord-ganesha.png"
                    alt="Lord Ganesha"
                    width={200}
                    height={200}
                    className={styles.ganesha}
                  />
                  <h2 className={styles.names}>
                    {WEDDING_DETAILS.coupleNames}
                  </h2>
                  <p className={styles.subtitle}>Wedding Invitation</p>
                  <div className={styles.sealRow}>
                    <span className={styles.sealLine} />
                    <span className={styles.seal}>✦</span>
                    <span className={styles.sealLine} />
                  </div>
                  {phase === "idle" && (
                    <p className={styles.tap}>Tap to Open</p>
                  )}
                </div>

                <div className={styles.cardBack}>
                  <p className={styles.backVerse}>
                    {WEDDING_DETAILS.soulHearts}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
