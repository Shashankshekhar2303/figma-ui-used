/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f8f9fa",
          "200": "#f7f8fa",
          "300": "#f1f3f5",
          "400": "rgba(241, 243, 245, 0.8)",
          "500": "#f2f2f2",
          "600": "#edeef0",
        },
        gray: {
          "100": "#8a8a8a",
          "200": "#212529",
          "300": "rgba(33, 37, 41, 0.6)",
          "400": "#88898a",
          "500": "#808080",
          "700": "rgba(0, 0, 0, 0.7)",
          "800": "rgba(0, 0, 0, 0.6)",
          "900": "rgba(0, 0, 0, 0.5)",
        },
        darkslategray: {
          "100": "#495057",
          "200": "#343a40",
          "300": "#3d3d3d",
          "500": "#2e2e2e",
        },
        darkgray: {
          "100": "#a9aeb8",
          "200": "#989899",
        },
        mediumseagreen: "#02b875",
        black: "#000",
        tomato: "#e56135",
        gainsboro: {
          "100": "#d8dadb",
          "200": "#d9d9db",
          "300": "#e6e6e6",
          "400": "#e0e0e0",
          "500": "#d6e6db",
        },
        royalblue: "#2f6ce5",
        silver: {
          "100": "#bfbfc2",
          "200": "#b8b8b8",
          "300": "#b6b6b8",
        },
        dimgray: {
          "100": "#6a6a6b",
          "200": "#5c5c5c",
          "300": "#525252",
        },
        slategray: "#757a85",
        dodgerblue: "#4785ff",
        honeydew: "#effff4",
        seagreen: "#008a45",
      },
      spacing: {},
      fontFamily: {
        "ibm-plex-sans": "'IBM Plex Sans'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "2xl": "21px",
        sm: "14px",
      },
    },
    fontSize: {
      xs: "12px",
      smi: "13px",
      base: "16px",
      sm: "14px",
      mid: "17px",
      "2xs": "11px",
      lg: "18px",
      mini: "15px",
      "3xl": "22px",
      lgi: "19px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
