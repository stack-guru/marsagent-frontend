import React from "react";
import { SocialIconProps } from "../../../types/about";

const SocialIcon:React.FC<SocialIconProps> = ({item}) => {
  const { icon, link } = item;
  return (
    <a className="block" target="_blank" href={link}>
      {icon}
    </a>
  );
}

export default SocialIcon;
