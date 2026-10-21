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
