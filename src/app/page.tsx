"use client";

import Contact from "./components/contacts/page";
import GalleryHeader from "./components/GalleryHeader";
import GalleryTabs from "./components/GalleryTabs";

export default function Home() {
  // const [activeSection, setActiveSection] = useState("services");

  return (
    <main className="min-h-auto h-screen bg-white">
      <div>
        <GalleryHeader />
        <GalleryTabs />
      </div>
      <div className="pt-32 min-h-screen flex items-center justify-center bg-white">
        <Contact />
      </div>
    </main>
  );
}
