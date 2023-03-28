import { SVGProps } from 'react';

function ProfileSkeleton({ width, height, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={width || 72} height={height || 72} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.9753 61.0012C63.3052 55.1373 68 46.1169 68 36C68 18.3269 53.6731 4 36 4C18.3269 4 4 18.3269 4 36C4 46.1167 8.69469 55.137 16.0243 61.001C16.5449 50.4194 25.2891 42 35.9998 42C46.7106 42 55.4549 50.4195 55.9753 61.0012ZM48.0003 28C48.0003 34.6274 42.6277 40 36.0003 40C29.3729 40 24.0003 34.6274 24.0003 28C24.0003 21.3726 29.3729 16 36.0003 16C42.6277 16 48.0003 21.3726 48.0003 28Z"
        fill="#BFBFBF"
      />
    </svg>
  );
}
export default ProfileSkeleton;
