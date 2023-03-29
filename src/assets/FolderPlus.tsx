import { SVGProps } from 'react';

function FolderPlus({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width || 72}
      height={height || 72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M66 57C66 58.5913 65.3679 60.1174 64.2426 61.2426C63.1174 62.3679 61.5913 63 60 63H12C10.4087 63 8.88258 62.3679 7.75736 61.2426C6.63214 60.1174 6 58.5913 6 57V15C6 13.4087 6.63214 11.8826 7.75736 10.7574C8.88258 9.63214 10.4087 9 12 9H27L33 18H60C61.5913 18 63.1174 18.6321 64.2426 19.7574C65.3679 20.8826 66 22.4087 66 24V57Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 33V51"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 42H45"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default FolderPlus;
