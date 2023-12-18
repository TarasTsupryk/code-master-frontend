import React from "react";
import { Blank, Icon } from "grommet-icons";

export const PlusIcon: Icon = (props) => (
  <Blank
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_318_1434"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="12"
      height="12"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 0C6.66274 0 7.2 0.537258 7.2 1.2V4.8H10.8C11.4627 4.8 12 5.33726 12 6C12 6.66274 11.4627 7.2 10.8 7.2H7.2V10.8C7.2 11.4627 6.66274 12 6 12C5.33726 12 4.8 11.4627 4.8 10.8V7.2H1.2C0.537258 7.2 0 6.66274 0 6C0 5.33726 0.537258 4.8 1.2 4.8H4.8V1.2C4.8 0.537258 5.33726 0 6 0Z"
        fill="none"
      />
    </mask>
    <g mask="url(#mask0_318_1434)">
      <rect width="12" height="12" fill="white" />
    </g>
  </Blank>
);