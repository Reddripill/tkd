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
            extraLightBlue: "#E8F9FE",
         },
         colors: {
            darkBlue: "#00183C",
            gray: "#989696",
            ceil: "#ddd",
         },
         boxShadow: {
            header:
               "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;",
            button: "rgba(0,24,60,0.3)_0px_7px_29px_0px",
            slider:
               "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
         },
         borderRadius: {
            main: "10px",
         },
         screens: {
            container: "1440px",
         },
      },
   },
   plugins: [],
};
export default config;
