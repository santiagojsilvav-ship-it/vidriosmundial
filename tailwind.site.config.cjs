// Tailwind v3 config for the static site (index.html). Same theme as the former CDN inline config.
// Build: npx tailwindcss@3.4.19 -c tailwind.site.config.cjs -i css/tailwind.input.css -o css/site.css --minify
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Instrument Serif', 'serif'],
      },
      colors: {
        ink: '#0a0a0a',
        paper: '#ffffff',
        mist: '#f7f7f7',
        fog: '#e8eaed',
        silver: '#9ca3af',
        accent: '#004480',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
};
