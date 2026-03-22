"use client";
import Hero from "./Hero";
import Countdown from "./Countdown";
import WeddingEvents from "./WeddingEvents";
import Venue from "./Venue";
import SectionDivider from "./SectionDivider";
import FamilyMessage from "./FamilyMessage";
import Footer from "./Footer";
import OpeningInvitation from "./OpeningInvitation";
import { SECTION_COLORS as SC } from "@/constants/weddingDetails";

export default function InvitationPage({ eventsType = "simple" }) {
  return (
    <main>
      <OpeningInvitation />
      <Hero />
      <FamilyMessage />
      <SectionDivider
        fromColor={SC.familyMessage}
        toColor={SC.countdown}
        imageNeeded={true}
      />
      <Countdown />
      <SectionDivider
        fromColor={SC.countdown}
        toColor={SC.weddingEvents}
        imageNeeded={false}
      />
      <WeddingEvents type={eventsType} />
      <SectionDivider
        fromColor={SC.weddingEvents}
        toColor={SC.venue}
        imageNeeded={false}
      />
      <Venue />
      <Footer />
    </main>
  );
}
