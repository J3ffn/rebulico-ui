import React from "react";

interface IconProps {
  src: string;
  ariaLabel: string;
}

const Icon: React.FC<IconProps> = ({ src, ariaLabel }) => {
  return <img src={src} aria-label={ariaLabel} />;
};

export default Icon;
