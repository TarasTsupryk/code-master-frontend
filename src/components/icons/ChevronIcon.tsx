import React from "react";
import { Blank, Icon } from "grommet-icons";

export const ChevronIcon: Icon = (props) => (
  <Blank
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    {...props}
  >
    <path
      d="M1 1L7 7L13 1"
      stroke="#56606D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Blank>
);
