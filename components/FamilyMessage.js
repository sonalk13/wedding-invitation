"use client";

import { motion } from "framer-motion";
import styles from "./FamilyMessage.module.css";
import Image from "next/image";
import { WEDDING_DETAILS } from "../constants/weddingDetails";
import PetalRain from "./PetalRain";

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
            width={200}
            height={200}
            className={styles.ganesha}
          />
        </div>
        <PetalRain count={20} />
        <h2 className={styles.heading}>A Message from the Kesarwani Family</h2>

        <p className={styles.message}>
          With the divine blessings of our grandparents
        </p>

        <p className={styles.grandparents}>
          {WEDDING_DETAILS.brideGrandParents} <br />&{" "}
          {WEDDING_DETAILS.brideGrandParents2}
        </p>

        <p className={styles.message}>We</p>

        <p className={styles.parents}>
          <b>{WEDDING_DETAILS.brideMother}</b> <br />
          & <br />
          <b>{WEDDING_DETAILS.brideFather}</b>
        </p>

        <p className={styles.message}>
          cordially invite you to grace the wedding ceremony of our beloved
          daughter
        </p>

        <h3 className={styles.names}>{WEDDING_DETAILS.brideName}</h3>

        <p className={styles.with}>with</p>

        <h3 className={styles.names}>{WEDDING_DETAILS.groomName}</h3>

        <p className={styles.parents}>
          Son of <br />
          <b>
            {WEDDING_DETAILS.groomMother} & {WEDDING_DETAILS.groomFather}
          </b>
        </p>

        <p className={styles.grandparents}>
          Grandson of <br />
          {WEDDING_DETAILS.groomGrandParents} <br />&{" "}
          {WEDDING_DETAILS.groomGrandParents2}
        </p>

        <p className={styles.footerText}>
          Your presence and blessings will make this celebration truly special.
          ✨
        </p>
      </motion.div>
    </section>
  );
}
