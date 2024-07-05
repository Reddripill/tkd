import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      transitionDuration: {
         DEFAULT: "300ms",
      },
      extend: {
         backgroundColor: {
            main: "#E6E6E6",
            darkBlue: "#00183C",
            lightBlue: "#022252",
         },
         colors: {
            darkBlue: "#00183C",
            gray: "#989696",
         },
         boxShadow: {
            button: "rgba(0,24,60,0.3)_0px_7px_29px_0px",
            slider:
               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
         },
         screens: {
            container: "1440px",
         },
      },
   },
   plugins: [],
};
export default config;
