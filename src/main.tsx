// StrictMode włącza dodatkowe kontrole Reacta podczas pracy nad aplikacją.
import { StrictMode } from 'react';

// createRoot pozwala umieścić aplikację React w elemencie strony HTML.
import { createRoot } from 'react-dom/client';

// Najpierw ujednolicamy podstawowe style różnych przeglądarek.
import 'modern-normalize/modern-normalize.css';

// Następnie dodajemy własne style globalne, np. czcionkę strony.
import './index.css';

// App to główny komponent zawierający całą aplikację.
import App from './components/App/App.tsx';

// Szukamy elementu <div id="root"> z pliku index.html i tworzymy korzeń Reacta.
// Znak ! informuje TypeScript, że oczekujemy istnienia tego elementu.
// Metoda render umieszcza w nim komponent App otoczony przez StrictMode.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
