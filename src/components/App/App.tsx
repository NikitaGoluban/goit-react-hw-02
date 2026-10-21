// useState pozwala Reactowi pamiętać dane i odświeżać widok po ich zmianie.
import { useState } from 'react';

// Wspólne typy opisują liczniki głosów i dozwolone nazwy ocen.
import type { Votes, VoteType } from '../../types/votes';

// Importujemy mniejsze komponenty, z których składamy całą aplikację.
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';

// Style z tego pliku dotyczą kontenera aplikacji.
import css from './App.module.css';

// App przechowuje głosy i przekazuje dane oraz funkcje do innych komponentów.
export default function App() {
  // Na początku każda ocena ma zero głosów. Votes określa typ tego obiektu.
  const votesState = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  // useState zwraca tablicę: pod indeksem 0 znajduje się aktualny stan.
  const votes = votesState[0];

  // Pod indeksem 1 znajduje się funkcja służąca do zmiany stanu.
  const setVotes = votesState[1];

  // type określa wybraną ocenę: 'good', 'neutral' albo 'bad'.
  function handleVote(type: VoteType) {
    // React przekazuje do tej funkcji aktualny poprzedni stan.
    // Dzięki temu także szybkie kliknięcia poprawnie zwiększają liczniki.
    setVotes(function (previousVotes) {
      // Tworzymy nowy obiekt i kopiujemy do niego dotychczasowe wyniki.
      // W ten sposób nie zmieniamy bezpośrednio poprzedniego obiektu stanu.
      const newVotes: Votes = {
        good: previousVotes.good,
        neutral: previousVotes.neutral,
        bad: previousVotes.bad,
      };

      // Każdy warunek sprawdza, czy należy zwiększyć właśnie ten licznik.
      if (type === 'good') {
        newVotes.good = newVotes.good + 1;
      }

      if (type === 'neutral') {
        newVotes.neutral = newVotes.neutral + 1;
      }

      if (type === 'bad') {
        newVotes.bad = newVotes.bad + 1;
      }

      // React zapisze zwrócony obiekt jako nowy stan i zaktualizuje widok.
      return newVotes;
    });
  }

  // Reset zastępuje wszystkie wyniki obiektem zawierającym same zera.
  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  // Suma obejmuje wszystkie trzy rodzaje ocen.
  // Możemy ją obliczyć ze stanu, dlatego nie tworzymy dla niej osobnego useState.
  const totalVotes = votes.good + votes.neutral + votes.bad;

  // Przy braku głosów przyjmujemy zero procent pozytywnych ocen.
  let positiveRate = 0;

  // Obliczamy procent tylko wtedy, gdy suma jest większa od zera.
  // Dzielimy liczbę ocen Good przez sumę, mnożymy przez 100 i zaokrąglamy.
  if (totalVotes > 0) {
    positiveRate = Math.round((votes.good / totalVotes) * 100);
  }

  // JSX opisuje elementy interfejsu wyświetlane przez React.
  return (
    <div className={css.app}>
      {/* Stały nagłówek z nazwą kawiarni i instrukcją głosowania. */}
      <CafeInfo />

      {/* Przekazujemy przyciskom funkcję głosowania i funkcję resetowania. */}
      {/* canReset będzie true, gdy istnieje przynajmniej jeden głos. */}
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {/* Zapis warunek ? pierwszyWidok : drugiWidok wybiera jeden z widoków. */}
      {/* Po oddaniu głosu pokazujemy statystyki i przekazujemy im gotowe dane. */}
      {/* Przy zerowej sumie pokazujemy Notification z komunikatem o braku ocen. */}
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

/*
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import css from './App.module.css';

export default function App() {
  const votesState = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const votes = votesState[0];
  const setVotes = votesState[1];

  function handleVote(type: VoteType) {
    setVotes(function (previousVotes) {
      const newVotes: Votes = {
        good: previousVotes.good,
        neutral: previousVotes.neutral,
        bad: previousVotes.bad,
      };

      if (type === 'good') {
        newVotes.good = newVotes.good + 1;
      }

      if (type === 'neutral') {
        newVotes.neutral = newVotes.neutral + 1;
      }

      if (type === 'bad') {
        newVotes.bad = newVotes.bad + 1;
      }

      return newVotes;
    });
  }

  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  let positiveRate = 0;

  if (totalVotes > 0) {
    positiveRate = Math.round((votes.good / totalVotes) * 100);
  }

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
*/
