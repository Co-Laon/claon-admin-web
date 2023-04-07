import { SVGProps } from 'react';

function CrossIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="14"
        cy="14"
        r="14"
        fill="#808080"
        stroke="white"
        strokeWidth="4"
      />
      <rect
        x="8"
        y="18.3784"
        width="14.6772"
        height="2.29332"
        rx="1.14666"
        transform="rotate(-45 8 18.3784)"
        fill="white"
      />
      <rect
        x="9.62158"
        y="8"
        width="14.6772"
        height="2.29332"
        rx="1.14666"
        transform="rotate(45 9.62158 8)"
        fill="white"
      />
    </svg>
  );
}

export default CrossIcon;
