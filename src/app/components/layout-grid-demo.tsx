"use client";
import type React from "react";
import { useState } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { cn } from "@/lib/utils";

export default function LayoutGridDemo() {
  const [activeTab, setActiveTab] = useState<"photography" | "graphic" | "web">(
    "photography"
  );

  return (
    <div className="h-screen w-full">
      <div className="max-w-7xl mx-auto pt-10 4">
        <div className="flex justify-center space-x-4 mb-8">
          <TabButton
            active={activeTab === "photography"}
            onClick={() => setActiveTab("photography")}
          >
            Photography
          </TabButton>
          <TabButton
            active={activeTab === "graphic"}
            onClick={() => setActiveTab("graphic")}
          >
            Graphic Design
          </TabButton>
          <TabButton
            active={activeTab === "web"}
            onClick={() => setActiveTab("web")}
          >
            Web Design
          </TabButton>
        </div>
      </div>

      <div
        className={cn(
          activeTab === "photography" ? "block" : "hidden",
          "h-full"
        )}
      >
        <div className="h-full ">
          <LayoutGrid cards={photographyCards} />
        </div>
      </div>

      <div
        className={cn(activeTab === "graphic" ? "block" : "hidden", "h-full")}
      >
        <div className="h-full ">
          <LayoutGrid cards={graphicDesignCards} />
        </div>
      </div>

      <div className={cn(activeTab === "web" ? "block" : "hidden", "h-full")}>
        <div className="h-full ">
          <LayoutGrid cards={webDesignCards} />
        </div>
      </div>
    </div>
  );
}

const TabButton = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all",
        active
          ? "bg-black text-white shadow-lg"
          : "bg-white text-gray-600 hover:bg-gray-100"
      )}
    >
      {children}
    </button>
  );
};

// Photography content
const PhotoSkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Nature Photography
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Capturing the serene beauty of natural landscapes, from dense forests to
        open meadows.
      </p>
    </div>
  );
};

const PhotoSkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Mountain Views</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Majestic peaks and valleys captured in perfect light, showcasing natures
        grandeur.
      </p>
    </div>
  );
};

const PhotoSkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Forest Retreats
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Lush greenery and hidden paths through ancient woods, where sunlight
        filters through the canopy.
      </p>
    </div>
  );
};

const PhotoSkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Riverside Serenity
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The gentle flow of water creating a peaceful atmosphere, perfect for
        reflection and contemplation.
      </p>
    </div>
  );
};

// Graphic Design content
const GraphicSkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Brand Identity</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Creating cohesive visual systems that communicate a brand s values and
        personality.
      </p>
    </div>
  );
};

const GraphicSkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Print Design</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Crafting beautiful materials for physical media, from business cards to
        billboards.
      </p>
    </div>
  );
};

const GraphicSkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Packaging Design
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Functional and attractive packaging solutions that enhance product
        appeal and user experience.
      </p>
    </div>
  );
};

const GraphicSkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Editorial Design
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Layouts for magazines, books, and other publications that balance
        aesthetics and readability.
      </p>
    </div>
  );
};

// Web Design content
const WebSkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Responsive Websites
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Creating seamless experiences across all devices, from mobile to
        desktop.
      </p>
    </div>
  );
};

const WebSkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        E-commerce Platforms
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        User-friendly online stores that drive conversions and enhance the
        shopping experience.
      </p>
    </div>
  );
};

const WebSkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Interactive Experiences
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Engaging web applications that respond to user input and create
        memorable interactions.
      </p>
    </div>
  );
};

const WebSkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Portfolio Websites
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Showcasing creative work with elegant, intuitive navigation and
        thoughtful presentation.
      </p>
    </div>
  );
};

// Photography Cards
const photographyCards = [
  {
    id: 1,
    content: <PhotoSkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <PhotoSkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <PhotoSkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <PhotoSkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Graphic Design Cards
const graphicDesignCards = [
  {
    id: 5,
    content: <GraphicSkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <GraphicSkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    content: <GraphicSkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    content: <GraphicSkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Web Design Cards
const webDesignCards = [
  {
    id: 9,
    content: <WebSkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    content: <WebSkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    content: <WebSkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    content: <WebSkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
