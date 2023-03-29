import { SVGProps } from 'react';

function AddIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 12.75H12.75V18H11.25V12.75H6V11.25H11.25V6H12.75V11.25H18V12.75Z"
        fill="#1D192B"
      />
    </svg>
  );
}
export default AddIcon;
