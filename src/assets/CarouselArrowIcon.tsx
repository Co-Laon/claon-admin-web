import React, { SVGProps } from 'react';

function CarouselArrowIcon({ fill, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.704505 1.2045C0.265165 1.64384 0.265165 2.35616 0.704505 2.7955L8.90901 11L0.704505 19.2045C0.265165 19.6438 0.265165 20.3562 0.704505 20.7955C1.14384 21.2348 1.85616 21.2348 2.2955 20.7955L11.2955 11.7955C11.7348 11.3562 11.7348 10.6438 11.2955 10.2045L2.2955 1.2045C1.85616 0.765165 1.14384 0.765165 0.704505 1.2045Z"
        fill={fill || '#808080'}
      />
    </svg>
  );
}

export default CarouselArrowIcon;
