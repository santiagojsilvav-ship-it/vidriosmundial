// Tailwind v3 config for the static site (public/index.html). Same theme as the former CDN inline config.
// Build after editing the HTML: npm run build:css (the compiled public/css/site.css is committed; Vercel does not build)
module.exports = {
  content: ['./public/index.html'],
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
