"use client";

import { motion } from "framer-motion";
import styles from "./FamilyMessage.module.css";
import Image from "next/image";
export default function FamilyMessage() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.icon}>
          <Image
            src="/lord-ganesha.png"
            alt="Lord Ganesha"
            width={160}
            height={160}
            className={styles.ganesha}
          />
        </div>

        <h2 className={styles.heading}>A Message from the Kesarwani Family</h2>

        <p className={styles.message}>
          With the divine blessings of our grandparents
        </p>

        <p className={styles.grandparents}>
          Late Shri. Ravindra Nath Gupta <br />& Late Smt. Kewala Devi
        </p>

        <p className={styles.message}>We</p>

        <p className={styles.parents}>
          <b>Smt. Neeru Kesarwani</b> <br />
          & <br />
          <b>Shri. S.K. Kesarwani</b>
        </p>

        <p className={styles.message}>
          cordially invite you to grace the wedding ceremony of our beloved
          daughter
        </p>

        <h3 className={styles.names}>Sonal</h3>

        <p className={styles.with}>with</p>

        <h3 className={styles.names}>Aman</h3>

        <p className={styles.parents}>
          Son of <br />
          <b>Smt. Puspha Keshari & Shri. Anil Keshari</b>
        </p>

        <p className={styles.grandparents}>
          Grandson of <br />
          Late Smt. Bela Devi <br />& Late Shri. Ram Sewak Keshri
        </p>

        <p className={styles.footerText}>
          Your presence and blessings will make this celebration truly special.
          ✨
        </p>
      </motion.div>
    </section>
  );
}
