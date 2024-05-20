import React from "react";

interface CubeIconProps {
  styles?: React.CSSProperties;
}

function CubeIcon({styles}:CubeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={styles}
    >
      <g clipPath="url(#clip0_3_4483)">
        <path
          fill="#A1A1AA"
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_4483">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CubeIcon;
