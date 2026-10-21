// Podstawowe zalecane reguły sprawdzania JavaScript.
import js from '@eslint/js';

// Lista nazw dostępnych w przeglądarce, np. window i document.
import globals from 'globals';

// Reguły dotyczące poprawnego używania hooków Reacta, takich jak useState.
import reactHooks from 'eslint-plugin-react-hooks';

// Reguły współpracy komponentów z szybkim odświeżaniem podczas programowania.
import reactRefresh from 'eslint-plugin-react-refresh';

// Reguły i obsługa składni TypeScript dla ESLinta.
import tseslint from 'typescript-eslint';

// Pomocnicze funkcje do tworzenia konfiguracji i wykluczania plików.
import { defineConfig, globalIgnores } from 'eslint/config';

// npm run lint odczytuje tę konfigurację i sprawdza kod projektu.
export default defineConfig([
  // Gotowe pliki z dist są generowane automatycznie, więc ich nie sprawdzamy.
  globalIgnores(['dist']),
  {
    // Ta grupa ustawień dotyczy plików TypeScript i komponentów TSX.
    files: ['**/*.{ts,tsx}'],
    // Łączymy zalecane reguły z kilku narzędzi zamiast ustawiać każdą osobno.
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    // Informujemy ESLint, że kod działa w środowisku przeglądarki.
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
