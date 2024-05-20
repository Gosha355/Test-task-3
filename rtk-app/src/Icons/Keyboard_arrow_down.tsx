import React from "react";

interface KeyboardArrowIconProps {
  styles?: React.CSSProperties;
}

function KeyboardArrowIcon({styles}: KeyboardArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={styles}
    >
      <g clipPath="url(#clip0_3_4487)">
        <path
          fill="#fff"
          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_4487">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default KeyboardArrowIcon;