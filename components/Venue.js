"use client";

import styles from "./Venue.module.css";
import { WEDDING_DETAILS } from "../constants/weddingDetails";

export default function Venue() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Wedding Venue</h2>

      <p className={styles.location}>{WEDDING_DETAILS.weddingVenue}</p>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0349728928945!2d81.04688767692618!3d26.90238516053165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958965414df19%3A0x2f8f93c17ca5f738!2sJashn%20Resort!5e0!3m2!1sen!2sin!4v1773557423020!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        ></iframe>
      </div>
    </section>
  );
}
