import React from "react";
import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// number of steps
const STEPS_COUNT = 8;

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const totalSteps = STEPS_COUNT;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion DIVs, each representing a step of the stairs.
    Each div will have the same animation defined by the stairAnimation object.
    The delay for each div is calculated dynamically based on its reversed index,
    creating a staggered effect with decreasing delay for each subsequent step.
    */}
      {[...Array(STEPS_COUNT)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
