# 02-react-cafe

A café feedback widget built with React, TypeScript, and Vite.

Choose **Good**, **Neutral**, or **Bad** to leave feedback. After the first vote,
the app displays the counts, total votes, rounded positive percentage, and a
**Reset** button. Reset clears all votes and restores **No feedback yet**.
Votes are held in React state and reset when the page reloads.

## Local development

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run format:check
npm run build
npm run preview
```

## Components

Each component has its own folder in `src/components` with a `.tsx` file and a
matching `.module.css` file: `App`, `CafeInfo`, `VoteOptions`, `VoteStats`, and
`Notification`. Shared `Votes` and `VoteType` definitions are in
`src/types/votes.ts`.

Component styles come from the assignment's
[react-cafe-styles repository](https://github.com/goitacademy/react-cafe-styles).
Global browser defaults are normalized with `modern-normalize`.

## Submission

The assignment requires a GitHub repository named `02-react-cafe` and a Vercel
production URL. Import that repository into Vercel as a Vite project, using
`npm run build` as the build command and `dist` as the output directory.
Check voting and reset on the deployed page before submitting both links.
The assignment asks you to wait five minutes after the last repository update
before submitting to the LMS.

## Objaśnienia plików JSON

W kodzie, stylach i konfiguracjach obsługujących komentarze znajdują się
objaśnienia po polsku. Zwykły JSON nie obsługuje komentarzy, dlatego znaczenie
`package.json`, `package-lock.json` i `.prettierrc.json` opisujemy tutaj.
Pliki `tsconfig.json` są wyjątkiem: TypeScript pozwala w nich na komentarze.

### package.json

Ten plik opisuje projekt, jego zależności i dostępne polecenia npm.

| Pole              | Znaczenie                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `name`            | Nazwa pakietu projektu: `02-react-cafe`. Sama nie zmienia nazwy repozytorium GitHub.                                |
| `private`         | Wartość `true` chroni przed przypadkowym opublikowaniem pakietu w npm. Nie określa widoczności repozytorium GitHub. |
| `version`         | Numer wersji pakietu.                                                                                               |
| `type`            | Wartość `module` pozwala używać w plikach JavaScript składni `import` i `export`.                                   |
| `scripts`         | Skróty poleceń uruchamiane przez `npm run`.                                                                         |
| `dependencies`    | Biblioteki, z których korzysta aplikacja.                                                                           |
| `devDependencies` | Narzędzia do pracy nad kodem, sprawdzania go i przygotowania wersji produkcyjnej.                                   |

Polecenia z sekcji `scripts`:

| Polecenie              | Co robi                                                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`          | Uruchamia serwer Vite do pracy nad aplikacją i odświeża widok po zmianach.                                                                                    |
| `npm run build`        | Najpierw sprawdza TypeScript poleceniem `tsc -b`, a potem buduje aplikację w folderze `dist`. Zapis `&&` uruchamia drugi etap tylko po powodzeniu pierwszego. |
| `npm run lint`         | Uruchamia ESLint, który szuka problemów w kodzie.                                                                                                             |
| `npm run preview`      | Udostępnia lokalnie wcześniej zbudowaną zawartość folderu `dist`.                                                                                             |
| `npm run format`       | Formatuje pliki i zapisuje zmiany zgodnie z ustawieniami Prettiera.                                                                                           |
| `npm run format:check` | Sprawdza formatowanie, bez zmieniania plików.                                                                                                                 |

Biblioteki aplikacji:

| Pakiet             | Do czego służy                                              |
| ------------------ | ----------------------------------------------------------- |
| `react`            | Komponenty i mechanizmy Reacta, np. `useState`.             |
| `react-dom`        | Umieszczanie komponentów Reacta na stronie HTML.            |
| `modern-normalize` | Ujednolicenie podstawowych stylów w różnych przeglądarkach. |

Narzędzia używane podczas pracy nad projektem:

| Pakiet lub grupa pakietów                                               | Do czego służy                                                             |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `vite`, `@vitejs/plugin-react`                                          | Uruchamianie serwera, obsługa Reacta i przygotowanie plików produkcyjnych. |
| `typescript`                                                            | Sprawdzanie zgodności kodu z zadeklarowanymi typami.                       |
| `@types/react`, `@types/react-dom`, `@types/node`, `@types/babel__core` | Opisy typów bibliotek i środowisk wykorzystywane przez TypeScript.         |
| `@babel/core`, `@rolldown/plugin-babel`, `babel-plugin-react-compiler`  | Obsługa kompilatora Reacta skonfigurowanego w `vite.config.ts`.            |
| `eslint`, `@eslint/js`, `typescript-eslint`                             | Sprawdzanie kodu JavaScript i TypeScript.                                  |
| `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`              | Dodatkowe reguły dotyczące Reacta i odświeżania komponentów.               |
| `globals`                                                               | Lista nazw dostępnych w środowisku, np. `window` w przeglądarce.           |
| `prettier`                                                              | Automatyczne formatowanie kodu.                                            |

### package-lock.json

Ten plik tworzy i aktualizuje npm. Zapisuje dokładne wersje bibliotek, ich
zależności i dane potrzebne do weryfikowania pobieranych pakietów. Dzięki niemu
`npm ci` może odtworzyć zależności projektu, np. podczas wdrażania na Vercel.
Nie dopisujemy do niego komentarzy ani nie zmieniamy go ręcznie.

### .prettierrc.json

Ustawienie `singleQuote: true` wybiera pojedyncze cudzysłowy w kodzie
JavaScript i TypeScript, np. `'good'`. Składnia JSON nadal wymaga podwójnych
cudzysłowów. Pozostałe ustawienia formatowania są domyślnymi ustawieniami
Prettiera. Pliki wykluczone z formatowania wymienia `.prettierignore`.
