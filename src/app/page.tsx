"use client";

// import { useState } from "react";
// import Navbar from "./components/Navbar";
import LayoutGridDemo from "./components/layout-grid-demo";
import Contact from "./components/contacts/page";
import { TypewriterEffectSmoothDemo } from "./components/typewriter";

export default function Home() {
  // const [activeSection, setActiveSection] = useState("services");

  return (
    <main className="min-h-auto h-screen bg-white">
      {/* <Navbar setActiveSection={setActiveSection} /> */}

      {/* {activeSection === "services" && (
        <div className="pt-10">
          <TypewriterEffectSmoothDemo />
          <LayoutGridDemo />
        </div>
      )} */}

      {/* {activeSection === "pricing" && (
        <div className=" min-h-screen h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-4xl font-bold">Pricing Section</h2>
        </div>
      )} */}

      {/* {activeSection === "contact" && (
        <div className="pt-10 min-h-screen flex items-center justify-center bg-gray-200">
          <Contact />
        </div>
      )} */}

      <div className="pt-10">
        <TypewriterEffectSmoothDemo />
        <LayoutGridDemo />
      </div>

      <div className="pt-32 min-h-screen flex items-center justify-center bg-white">
        {/* <ContactHeader /> */}

        <Contact />
      </div>
    </main>
  );
}
