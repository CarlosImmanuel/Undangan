"use client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Particles from "@/components/ui/Particles";
import CoverPage from "@/components/CoverPage";
import MainInvitation from "@/components/MainInvitation";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Particles />

      <AnimatePresence mode="wait">
        {!opened ? (
          <CoverPage key="cover" onOpen={() => { setOpened(true); window.scrollTo(0, 0); }} />
        ) : (
          <MainInvitation key="main" />
        )}
      </AnimatePresence>
    </>
  );
}
