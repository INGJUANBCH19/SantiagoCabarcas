/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: '100vh',
      },
      colors: {
        // Colores principales basados en tu paleta
        primary: '#593134',       // Color principal oscuro (vino tinto)
        secondary: '#592533',     // Color secundario (vino más oscuro)
        accent: '#D91E2E',        // Color de acento (rojo vibrante)
        light: '#F2F2F2',         // Color claro (fondo)
        // Colores adicionales para completar la paleta
        dark: '#2D1E1F',          // Color oscuro para textos
        gold: '#DBC078',           // Dorado como acento secundario (opcional)
        'accent-light': '#E84C3D', // Variante más clara del acento
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente moderna recomendada
      },
    },
  },
  plugins: [],
}