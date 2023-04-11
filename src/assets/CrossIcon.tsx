import { SVGProps } from 'react';

function CrossIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y="10.3784"
        width="14.6772"
        height="2.29332"
        rx="1.14666"
        transform="rotate(-45 0 10.3784)"
        fill="white"
      />
      <rect
        x="1.62158"
        width="14.6772"
        height="2.29332"
        rx="1.14666"
        transform="rotate(45 1.62158 0)"
        fill="white"
      />
    </svg>
  );
}

export default CrossIcon;
