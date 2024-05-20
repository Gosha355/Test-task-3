import React from "react";

interface DeleteIconProps {
  styles?: React.CSSProperties;
}

function DeleteIcon({styles}:DeleteIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
      style={styles}
    >
      <path
        fill="#DF4444"
        d="M1.5 1a1 1 0 00-1 1v1a1 1 0 001 1H2v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H9a1 1 0 00-1-1H6a1 1 0 00-1 1H1.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM7 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 017 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 111 0z"
      ></path>
    </svg>
  );
}

export default DeleteIcon;
