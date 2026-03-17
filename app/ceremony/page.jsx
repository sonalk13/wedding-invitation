"use client";

import Hero from "../../components/Hero";
import Countdown from "../../components/Countdown";
import WeddingEvents from "../../components/WeddingEvents";
import Venue from "../../components/Venue";
import SectionDivider from "../../components/SectionDivider";
import FamilyMessage from "../../components/FamilyMessage";
import Footer from "../../components/Footer";
import OpeningInvitation from "../../components/OpeningInvitation";

export default function SimplePage() {
  return (
    <main>
      <OpeningInvitation />
      <Hero />
      <FamilyMessage />
      <Countdown />
      <SectionDivider />
      <WeddingEvents type="full" />
      <Venue />
      <Footer />
    </main>
  );
}
