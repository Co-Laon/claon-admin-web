import { SVGProps } from 'react';

function ArrowIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 40}
      height={height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 19H15.83L21.42 13.41L20 12L12 20L20 28L21.41 26.59L15.83 21H28V19Z"
        fill="#49454F"
      />
    </svg>
  );
}

export default ArrowIcon;
