// defineConfig pomaga opisać ustawienia Vite i sprawdzać ich typy.
import { defineConfig } from 'vite';

// Plugin React obsługuje komponenty i odświeżanie ich podczas pracy nad kodem.
// reactCompilerPreset przygotowuje ustawienia kompilatora Reacta.
import react, { reactCompilerPreset } from '@vitejs/plugin-react';

// Plugin Babel pozwala uruchomić kompilator Reacta podczas przetwarzania kodu.
import babel from '@rolldown/plugin-babel';

// Ta konfiguracja jest używana przez polecenia npm run dev i npm run build.
export default defineConfig({
  // Lista rozszerzeń, które Vite uruchamia podczas przetwarzania aplikacji.
  plugins: [
    react(),
    // Kompilator Reacta może automatycznie optymalizować pracę komponentów.
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  // Ustawienia produkcyjnej wersji aplikacji zapisywanej w folderze dist.
  build: {
    // Mapy źródłowe pomagają powiązać zbudowany kod z oryginalnymi plikami.
    sourcemap: true,
  },
});
