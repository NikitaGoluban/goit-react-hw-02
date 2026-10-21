// Importujemy klasy CSS używane tylko przez ten komponent.
import css from './CafeInfo.module.css';

// Komponent wyświetla stałe informacje o kawiarni i nie potrzebuje propsów.
// export default pozwala zaimportować go w komponencie App.
export default function CafeInfo() {
  return (
    // Kontener grupuje tytuł i opis w jedną kartę.
    <div className={css.container}>
      {/* h1 to główny nagłówek strony. className przypisuje mu styl .title. */}
      <h1 className={css.title}>Sip Happens Café</h1>

      {/* Akapit podpowiada użytkownikowi, jak wystawić ocenę. */}
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}
