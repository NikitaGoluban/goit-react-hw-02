// Importujemy typ dopuszczalnej oceny: 'good', 'neutral' albo 'bad'.
// Słowo "type" oznacza, że ten import służy do sprawdzania typów w TypeScript.
import type { VoteType } from '../../types/votes';

// Importujemy style komponentu. Na przykład css.button oznacza klasę .button.
import css from './VoteOptions.module.css';

// Interfejs opisuje propsy, czyli wartości i funkcje przekazywane z App.
interface VoteOptionsProps {
  // Funkcja przyjmująca wybraną ocenę. "void" oznacza brak zwracanej wartości.
  onVote: (type: VoteType) => void;

  // Funkcja bez argumentów, która zeruje głosy w App.
  onReset: () => void;

  // Wartość true lub false: czy mamy wyświetlić przycisk Reset?
  canReset: boolean;
}

// Komponent odbiera propsy w jednym obiekcie o nazwie props.
// Odczytujemy je przez kropkę, np. props.onVote albo props.canReset.
// "export default" pozwala zaimportować ten komponent w pliku App.tsx.
export default function VoteOptions(props: VoteOptionsProps) {
  // Po kliknięciu Good przekazujemy ocenę 'good' do funkcji otrzymanej z App.
  function handleGoodClick() {
    props.onVote('good');
  }

  // Po kliknięciu Neutral przekazujemy ocenę 'neutral'.
  function handleNeutralClick() {
    props.onVote('neutral');
  }

  // Po kliknięciu Bad przekazujemy ocenę 'bad'.
  function handleBadClick() {
    props.onVote('bad');
  }

  // return zwraca JSX, czyli opis elementów, które React ma wyświetlić.
  return (
    <div className={css.container}>
      {/* type="button" sprawia, że przycisk nie wysyła formularza. */}
      {/* className przypisuje styl, a onClick wskazuje funkcję obsługi kliknięcia. */}
      {/* Zapis handleGoodClick przekazuje funkcję, którą React wywoła po kliknięciu. */}
      <button type="button" className={css.button} onClick={handleGoodClick}>
        Good
      </button>

      {/* Kliknięcie tego przycisku uruchamia funkcję handleNeutralClick. */}
      <button type="button" className={css.button} onClick={handleNeutralClick}>
        Neutral
      </button>

      {/* Kliknięcie tego przycisku uruchamia funkcję handleBadClick. */}
      <button type="button" className={css.button} onClick={handleBadClick}>
        Bad
      </button>

      {/* Gdy props.canReset jest true, wyświetlamy przycisk Reset. */}
      {/* W App ten warunek jest spełniony, gdy istnieje co najmniej jeden głos. */}
      {/* Przycisk otrzymuje dwie klasy: button (podstawową) i reset (czerwony kolor). */}
      {/* Kliknięcie uruchamia bezpośrednio funkcję props.onReset otrzymaną z App. */}
      {props.canReset && (
        <button
          type="button"
          className={`${css.button} ${css.reset}`}
          onClick={props.onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
