"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

const studioPhotos = [
  "/studio1.jpg",
  "/studio11.jpg",
  "/studio11.jpg",
  "/studio11.jpg",
  "/studio11.jpg",
  "/studio11.jpg",
];

const outdoorPhotos = [
  "/outdoor.jpg",
  "/outdoor.jpg",
  "/outdoor.jpg",
  "/outdoor.jpg",
  "/outdoor.jpg",
  "/outdoor.jpg",
];

const graphicDesigns = [
  {
    title: "Logo Design",
    description: "Clean and modern logo concepts for startups.",
    image: "/images/graphic1.jpg",
  },
  {
    title: "Poster Art",
    description: "Bold and expressive promotional posters.",
    image: "/images/graphic2.jpg",
  },
];

const webDesigns = [
  {
    title: "Portfolio Website",
    description: "Minimal and responsive portfolio layout.",
    image: "/images/web1.jpg",
  },
  {
    title: "E-Commerce UI",
    description: "Product-focused UI for an online store.",
    image: "/images/web2.jpg",
  },
];

export default function GalleryTabs() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomImage(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex justify-center w-full max-w-5xl mx-auto px-4 py-8 relative">
      <Tab.Group>
        <Tab.List className="flex justify-center space-x-2 mb-4">
          {["Photography", "Design Work"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                clsx(
                  "px-4 py-2 text-sm font-medium rounded-lg focus:outline-none",
                  selected
                    ? "bg-white outline-black text-black"
                    : "bg-black text-white hover:bg-stone-700"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {/* Photography Tab */}
          <Tab.Panel>
            <Tab.Group>
              <Tab.List className="flex justify-center space-x-2 mb-4">
                {["Studio Photoshoot", "Outdoor Photoshoot"].map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      clsx(
                        "px-3 py-1.5 text-sm rounded-md font-medium",
                        selected
                          ? "bg-white outline-black text-black"
                          : "bg-black text-white hover:bg-stone-700"
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {/* Studio Photos */}
                <Tab.Panel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {studioPhotos.map((src, idx) => (
                      <Image
                        key={idx}
                        src={src}
                        alt={`Studio ${idx}`}
                        width={300}
                        height={300}
                        onClick={() => setZoomImage(src)}
                        className="rounded-lg object-cover w-full h-full transition duration-500 hover:scale-105 cursor-pointer"
                      />
                    ))}
                  </div>
                </Tab.Panel>
                {/* Outdoor Photos */}
                <Tab.Panel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {outdoorPhotos.map((src, idx) => (
                      <Image
                        key={idx}
                        src={src}
                        alt={`Outdoor ${idx}`}
                        width={300}
                        height={300}
                        onClick={() => setZoomImage(src)}
                        className="rounded-lg object-cover w-full h-full transition duration-500 hover:scale-105 cursor-pointer"
                      />
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>

          {/* Design Work Tab */}
          <Tab.Panel>
            <Tab.Group>
              <Tab.List className="flex justify-center space-x-2 mb-4">
                {["Graphic Design", "Web Design"].map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      clsx(
                        "px-3 py-1.5 text-sm rounded-md font-medium",
                        selected
                          ? "bg-black text-white"
                          : "bg-gray-50 text-black hover:bg-gray-200"
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {graphicDesigns.map((item, idx) => (
                      <div key={idx} className="rounded-lg shadow bg-white">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-60 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {webDesigns.map((item, idx) => (
                      <div key={idx} className="rounded-lg shadow bg-white">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                          className="w-full h-60 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-auto p-4">
            <Image
              src={zoomImage}
              alt="Zoomed"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
