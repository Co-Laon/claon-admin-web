import React, { SVGProps } from 'react';

function PhotoIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 72}
      height={width || 72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_146_2213)">
        <path
          d="M62.75 15V57C62.75 59.8858 60.3858 62.25 57.5 62.25H15.5C12.6142 62.25 10.25 59.8858 10.25 57V15C10.25 12.1142 12.6142 9.75 15.5 9.75H57.5C60.3858 9.75 62.75 12.1142 62.75 15Z"
          fill="white"
          stroke="#333333"
          strokeWidth="1.5"
        />
        <path
          d="M27.2 41.9401L33.5 49.5301L42.8 37.5601C43.4 36.7801 44.6 36.7801 45.2 37.5901L55.73 51.6301C56.48 52.6201 55.76 54.0301 54.53 54.0301H18.56C17.3 54.0301 16.61 52.5901 17.39 51.6001L24.86 42.0001C25.43 41.2201 26.57 41.1901 27.2 41.9401Z"
          fill="#333333"
        />
      </g>
      <defs>
        <clipPath id="clip0_146_2213">
          <rect
            width="72"
            height="72"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PhotoIcon;
