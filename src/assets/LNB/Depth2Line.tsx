import React, { SVGProps } from 'react';

function Depth2Line({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="64"
      viewBox="0 0 12 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_1173_40724" fill="white">
        <path d="M0 0H8C10.2091 0 12 1.79086 12 4V64H4C1.79086 64 0 62.2091 0 60V0Z" />
      </mask>
      <path
        d="M0 0H12H0ZM12 65H4C1.23858 65 -1 62.7614 -1 60H1C1 61.6569 2.34315 63 4 63H12V65ZM4 65C1.23858 65 -1 62.7614 -1 60V0H1V60C1 61.6569 2.34315 63 4 63V65ZM12 0V64V0Z"
        fill="white"
        mask="url(#path-1-inside-1_1173_40724)"
      />
    </svg>
  );
}

export default Depth2Line;
