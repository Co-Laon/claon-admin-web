import { SVGProps } from 'react';

function PhotoEmptyIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="76"
      height="74"
      viewBox="0 0 76 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_156_2594)">
        <path
          d="M62.25 15V57C62.25 59.8858 59.8858 62.25 57 62.25H15C12.1142 62.25 9.75 59.8858 9.75 57V15C9.75 12.1142 12.1142 9.75 15 9.75H57C59.8858 9.75 62.25 12.1142 62.25 15Z"
          fill="white"
          stroke="#333333"
          strokeWidth="1.5"
        />
        <path
          d="M26.7 41.9401L33 49.5301L42.3 37.5601C42.9 36.7801 44.1 36.7801 44.7 37.5901L55.23 51.6301C55.98 52.6201 55.26 54.0301 54.03 54.0301H18.06C16.8 54.0301 16.11 52.5901 16.89 51.6001L24.36 42.0001C24.93 41.2201 26.07 41.1901 26.7 41.9401Z"
          fill="#333333"
        />
      </g>
      <g clipPath="url(#clip1_156_2594)">
        <circle
          cx="62"
          cy="60"
          r="14"
          fill="#B3261E"
          stroke="white"
          strokeWidth="4"
        />
        <rect
          x="56"
          y="64.3784"
          width="14.6772"
          height="2.29332"
          rx="1.14666"
          transform="rotate(-45 56 64.3784)"
          fill="white"
        />
        <rect
          x="57.6216"
          y="54"
          width="14.6772"
          height="2.29332"
          rx="1.14666"
          transform="rotate(45 57.6216 54)"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_156_2594">
          <rect width="72" height="72" fill="white" />
        </clipPath>
        <clipPath id="clip1_156_2594">
          <rect x="48" y="46" width="28" height="28" rx="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default PhotoEmptyIcon;
