import React from "react";

interface ArrowIconProps {
  styles?: React.CSSProperties;
}

function ArrowIcon({styles}:ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={styles}
    >
      <g clipPath="url(#clip0_3_4484)">
        <path
          fill="#A1A1AA"
          d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3_4484">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowIcon;