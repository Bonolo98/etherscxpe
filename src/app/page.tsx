"use client";

import Contact from "./components/contacts/page";
import GalleryHeader from "./components/GalleryHeader";
import GalleryTabs from "./components/GalleryTabs";

export default function Home() {

  return (
    <main className="min-h-screen h-auto bg-black">
      <div>
        <div className="sticky">
        <GalleryHeader  />
        </div>

        <GalleryTabs />
      </div>
      <div className="pt-32 min-h-screen flex items-center justify-center bg-black">
        <Contact />
      </div>
    </main>
  );
}
