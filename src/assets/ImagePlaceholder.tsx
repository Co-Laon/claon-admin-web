import { SVGProps } from 'react';

function ImagePlaceholder({
  width,
  height,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 342}
      height={height || 240}
      viewBox="0 0 342 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="1.5" y="1.5" width="339" height="237" fill="white" />
      <path
        d="M178 110H164C162.895 110 162 110.895 162 112V126C162 127.105 162.895 128 164 128H178C179.105 128 180 127.105 180 126V112C180 110.895 179.105 110 178 110Z"
        stroke="#667080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M167.5 117C168.328 117 169 116.328 169 115.5C169 114.672 168.328 114 167.5 114C166.672 114 166 114.672 166 115.5C166 116.328 166.672 117 167.5 117Z"
        stroke="#667080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M180 122L175 117L164 128"
        stroke="#667080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1.5"
        y="1.5"
        width="339"
        height="237"
        stroke="#667080"
        strokeWidth="3"
      />
    </svg>
  );
}

export default ImagePlaceholder;
