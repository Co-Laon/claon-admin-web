import { SVGProps } from 'react';

function ParkingIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_487_2382)">
        <g clipPath="url(#clip1_487_2382)">
          <rect width="40" height="40" rx="20" fill="#EADDFF" />
          <path
            d="M20.2922 20.7578H17.3313V19.2031H20.2922C20.8078 19.2031 21.2245 19.1198 21.5422 18.9531C21.8599 18.7865 22.0917 18.5573 22.2375 18.2656C22.3885 17.9688 22.4641 17.6302 22.4641 17.25C22.4641 16.8906 22.3885 16.5547 22.2375 16.2422C22.0917 15.9245 21.8599 15.6693 21.5422 15.4766C21.2245 15.2839 20.8078 15.1875 20.2922 15.1875H17.9328V25H15.9719V13.625H20.2922C21.1724 13.625 21.9198 13.7812 22.5344 14.0938C23.1542 14.401 23.6255 14.8281 23.9484 15.375C24.2714 15.9167 24.4328 16.5365 24.4328 17.2344C24.4328 17.9688 24.2714 18.599 23.9484 19.125C23.6255 19.651 23.1542 20.0547 22.5344 20.3359C21.9198 20.6172 21.1724 20.7578 20.2922 20.7578Z"
            fill="#21005D"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_487_2382">
          <rect width="40" height="40" fill="white" />
        </clipPath>
        <clipPath id="clip1_487_2382">
          <rect width="40" height="40" rx="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ParkingIcon;
