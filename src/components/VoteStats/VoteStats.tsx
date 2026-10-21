// Typ Votes opisuje obiekt z licznikami good, neutral i bad.
import type { Votes } from '../../types/votes';

// styles przechowuje klasy zaimportowane z modułu CSS.
import styles from './VoteStats.module.css';

// Określamy, jakie dane komponent musi otrzymać z App.
interface VoteStatsProps {
  // Obiekt zawierający liczbę ocen każdego rodzaju.
  votes: Votes;

  // Suma wszystkich ocen, obliczona wcześniej w App.
  totalVotes: number;

  // Zaokrąglony procent ocen Good, np. liczba 60 oznacza 60%.
  positiveRate: number;
}

// Odbieramy cały obiekt props, bez destrukturyzacji.
// Ten komponent wyświetla otrzymane dane. Obliczenia wykonuje App.
export default function VoteStats(props: VoteStatsProps) {
  return (
    <div className={styles.container}>
      {/* Nawiasy klamrowe w JSX wstawiają wartość JavaScript do widoku. */}
      {/* strong wyróżnia liczbę, a styles.stat nadaje styl całemu wierszowi. */}
      <p className={styles.stat}>
        Good: <strong>{props.votes.good}</strong>
      </p>
      {/* Liczba ocen neutralnych pochodzi z obiektu props.votes. */}
      <p className={styles.stat}>
        Neutral: <strong>{props.votes.neutral}</strong>
      </p>
      {/* Liczba ocen negatywnych. */}
      <p className={styles.stat}>
        Bad: <strong>{props.votes.bad}</strong>
      </p>
      {/* Gotowa suma wszystkich głosów otrzymana z App. */}
      <p className={styles.stat}>
        Total: <strong>{props.totalVotes}</strong>
      </p>
      {/* Do liczby dopisujemy znak %, aby pokazać wynik procentowy. */}
      <p className={styles.stat}>
        Positive: <strong>{props.positiveRate}%</strong>
      </p>
    </div>
  );
}
