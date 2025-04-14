import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Use the direct tailwindcss import
    autoprefixer,
  ],
};