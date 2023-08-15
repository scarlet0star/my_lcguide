/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: {
    options: {
      safelist: [
        'bg-card-1',
        'bg-card-2',
        'bg-card-3',
        'bg-card-4',
        'bg-card-5',
        'bg-card-6',
        'bg-card-7',
        'bg-card-8',
        'bg-card-9',
        'bg-card-10',
        'bg-card-11',
        'bg-card-12',
      ],
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "card-1": "#d4e1e8",
        "card-2": "#ffb1b4",
        "card-3": "#ffef23",
        "card-4": "#cf0000",
        "card-5": "#293b95",
        "card-6": "#5bffde",
        "card-7": "#4e3076",
        "card-8": "#ff9500",
        "card-9": "#820000",
        "card-10": "#8b9c15",
        "card-11": "#325339",
        "card-12": "#69350b",
      },
    },
  },
  plugins: [],
};
