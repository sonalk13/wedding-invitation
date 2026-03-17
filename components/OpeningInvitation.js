"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./OpeningInvitation.module.css";
import Image from "next/image";

export default function OpeningInvitation({ onOpen }) {
  const [open, setOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);

    /* start music */
    audioRef.current?.play();

    /* notify parent if needed */
    onOpen?.();
  };

  return (
    <div className={`${styles.wrapper} ${open ? styles.hide : ""}`}>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      <motion.div
        className={styles.card}
        initial={{ rotateY: 0 }}
        animate={open ? { rotateY: -160 } : { rotateY: 0 }}
        transition={{ duration: 1 }}
        onClick={handleOpen}
      >
        <div className={styles.front}>
          <Image
            src="/lord-ganesha.png"
            alt="Lord Ganesha"
            width={160}
            height={160}
            className={styles.ganesha}
          />
          <h2 className={styles.names}>Sonal ❤️ Aman</h2>

          <p className={styles.subtitle}>Wedding Invitation</p>

          <p className={styles.tap}>Tap to Open</p>
        </div>

        <div className={styles.inside}>
          <h3>Welcome</h3>

          <p>
            With joy in our hearts we invite you to celebrate the wedding of
          </p>

          <p className={styles.couple}>Sonal & Aman</p>
        </div>
      </motion.div>
    </div>
  );
}
