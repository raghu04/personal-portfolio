"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

// components
import LoadScript from "@/components/LoadScript";
import GoogleMap from "@/components/GoogleMap";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 90603 73332",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "raghu0894@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Bengaluru, KA",
  },
];

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleScriptLoad = () => {
    setIsLoaded(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* map */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>

              {/* Load the Google Maps Script */}
              <LoadScript
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
                onLoad={handleScriptLoad}
              />

              {/* Render the Google Map only after the script is loaded */}
              {isLoaded ? (
                <GoogleMap
                  lat={12.980297088623047}
                  lng={77.5870132446289}
                  zoom={12}
                />
              ) : (
                <p className="text-center text-white/60 text-xl">
                  Loading map...
                </p>
              )}
            </div>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map(({ icon, title, description }, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272C] text-accent rounded-xl flex justify-center items-center">
                    <div className="text-[28px]">{icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xl">{title}</p>
                    <h3>{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
