// Interfejs opisuje kształt obiektu przechowującego głosy.
// export pozwala korzystać z niego w kilku komponentach.
export interface Votes {
  // Liczba pozytywnych ocen.
  good: number;

  // Liczba neutralnych ocen.
  neutral: number;

  // Liczba negatywnych ocen.
  bad: number;
}

// Pionowa kreska oznacza wybór jednego z dozwolonych typów wartości.
// Tutaj ocena może mieć dokładnie jedną z trzech podanych nazw.
export type VoteType = 'good' | 'neutral' | 'bad';
