import React, { SVGProps } from 'react';

function MessageIcon({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || '27'}
      height={height || '27'}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.375 17.7501C0.375 18.5237 0.682291 19.2656 1.22927 19.8125C1.77625 20.3595 2.51812 20.6668 3.29167 20.6668H20.7917L26.625 26.5001V3.1668C26.625 2.39326 26.3177 1.65139 25.7707 1.10441C25.2237 0.557428 24.4819 0.250137 23.7083 0.250137H3.29167C2.51812 0.250137 1.77625 0.557428 1.22927 1.10441C0.682291 1.65139 0.375 2.39326 0.375 3.1668V17.7501Z"
        fill="#7A7289"
      />
    </svg>
  );
}

export default MessageIcon;
