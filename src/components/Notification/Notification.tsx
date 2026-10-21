// css.message odwołuje się do klasy .message z pliku stylów.
import css from './Notification.module.css';

// Komponent nie przyjmuje propsów: zawsze wyświetla ten sam komunikat.
// App pokazuje go wtedy, gdy łączna liczba głosów wynosi zero.
export default function Notification() {
  // Element p tworzy akapit z informacją o braku ocen.
  return <p className={css.message}>No feedback yet</p>;
}
