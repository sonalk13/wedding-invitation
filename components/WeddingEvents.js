"use client";

import styles from "./WeddingEvents.module.css";
import {
  Home,
  Music,
  Sparkles,
  Heart, // or Ring / Heart
  Car,
} from "lucide-react";

export default function WeddingEvents({ type }) {
  const allEvents = [
    {
      title: "Silmayan",
      date: "19 April 2026",
      time: "9 AM",
      venue: "Our Residence",
      icon: <Home size={28} className="text-rose-500" />,
      color: "#fcf2ed",
    },
    {
      title: "Haldi & Sangeet",
      date: "19 April 2026",
      time: "4 PM",
      venue: "Hotel Grand INN",
      icon: <Music size={28} className="text-amber-500" />,
      color: "#ffde42",
    },
    {
      title: "Mehendi",
      date: "20 April 2026",
      time: "11 AM",
      venue: "Our Residence",
      icon: <Sparkles size={28} className="text-emerald-500" />,
      color: "#109010",
    },
    {
      title: "Wedding",
      date: "21 April 2026",
      time: "7 PM",
      venue: "Jashn Resort",
      icon: <Heart size={28} className="text-rose-600" />,
      color: "#fb6f92",
    },
    {
      title: "Vidai",
      date: "22 April 2026",
      time: "8 AM",
      venue: "Jashn Resort",
      icon: <Car size={28} className="text-slate-600" />,
      color: "#FFB5C0",
    },
  ];

  const simpleEvents = allEvents.filter(
    (e) => e.title === "Wedding" || e.title === "Vidai",
  );

  const events = type === "simple" ? simpleEvents : allEvents;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Wedding Events</h2>

      <div className={styles.rope}></div>

      <div className={styles.events}>
        {events.map((event, index) => (
          <div key={index} className={styles.tag}>
            <div className={styles.hook}></div>

            <div
              className={styles.card}
              style={{ backgroundColor: event.color }}
            >
              <div className={styles.icon}>{event.icon}</div>

              <h3 className={styles.title}>{event.title}</h3>

              <p className={styles.date}>{event.date}</p>

              <p className={styles.time}>{event.time}</p>

              <p className={styles.venue}>{event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
