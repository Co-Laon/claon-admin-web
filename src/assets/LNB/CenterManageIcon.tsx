import React, { SVGProps } from 'react';

function CenterManageIcon({
  width,
  height,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || '14'}
      height={height || '20'}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM4 7C4 8.656 5.344 10 7 10C8.656 10 10 8.656 10 7C10 5.344 8.656 4 7 4C5.344 4 4 5.344 4 7Z"
        fill="#6750A4"
      />
    </svg>
  );
}

export default CenterManageIcon;
