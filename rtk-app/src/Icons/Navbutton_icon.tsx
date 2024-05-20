import React from "react";

interface NavbuttonIconProps {
  styles?: React.CSSProperties;
}

function NavbuttonIcon({styles}:NavbuttonIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      style={styles}
    >
      <g clipPath="url(#clip0_35303_11)">
        <path
          fill="#fff"
          d="M2.75 11.917h7.333V2.75H2.75v9.167zm0 7.333h7.333v-5.5H2.75v5.5zm9.167 0h7.333v-9.167h-7.333v9.167zm0-16.5v5.5h7.333v-5.5h-7.333z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_35303_11">
          <path fill="#fff" d="M0 0H22V22H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default NavbuttonIcon;