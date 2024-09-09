"use client";

import React, { FC } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface WorkSliderControlProps {
  containerStyles: string;
  buttonStyles: string;
  iconStyles: string;
}

const WorkSliderControl: FC<WorkSliderControlProps> = ({
  containerStyles,
  buttonStyles,
  iconStyles,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderControl;
