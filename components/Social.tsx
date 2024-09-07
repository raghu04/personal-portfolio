import Link from "next/link";
import React, { FC } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
];

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ path, icon }, index) => (
        <Link href={path} key={index} className={iconStyles}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
