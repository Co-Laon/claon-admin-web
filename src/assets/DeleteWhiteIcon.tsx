import { SVGProps } from 'react';

function DeleteWhiteIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 18}
      height={height || 18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 2.25V3H15V4.5H14.25V14.25C14.25 15.075 13.575 15.75 12.75 15.75H5.25C4.425 15.75 3.75 15.075 3.75 14.25V4.5H3V3H6.75V2.25H11.25ZM5.25 14.25H12.75V4.5H5.25V14.25ZM6.75 6H8.25V12.75H6.75V6ZM11.25 6H9.75V12.75H11.25V6Z"
        fill="white"
      />
    </svg>
  );
}
export default DeleteWhiteIcon;
