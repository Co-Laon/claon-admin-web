import { SVGProps } from 'react';

function PlusIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20 13H13V20H11V13H4V11H11V4H13V11H20V13Z" fill="#1C1B1F" />
    </svg>
  );
}
export default PlusIcon;
