import React from "react";

const TgIcon = ({ className }: { className?: string }) => {
   return (
      <svg
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         xmlSpace="preserve"
         width={24}
         height={24}
         className={`${className} #{!important}`}
      >
         <path d="M19.2 4.4 2.9 10.7c-1.1.4-1.1 1.1-.2 1.3l4.1 1.3 1.6 4.8c.2.5.1.7.6.7.4 0 .6-.2.8-.4l2-2 4.2 3.1c.8.4 1.3.2 1.5-.7l2.8-13.1c.3-1.1-.4-1.7-1.1-1.3zm-2.1 3-7.8 7.1-.3 3.3L7.4 13l9.2-5.8c.4-.3.8-.1.5.2z" />
         <path style={{ fill: "none" }} d="M0 0h24v24H0z" />
      </svg>
   );
};

export default TgIcon;
