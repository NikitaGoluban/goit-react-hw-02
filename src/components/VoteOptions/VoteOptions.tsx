import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions(props: VoteOptionsProps) {
  function handleGoodClick() {
    props.onVote('good');
  }

  function handleNeutralClick() {
    props.onVote('neutral');
  }

  function handleBadClick() {
    props.onVote('bad');
  }

  return (
    <div className={css.container}>
      <button type="button" className={css.button} onClick={handleGoodClick}>
        Good
      </button>
      <button type="button" className={css.button} onClick={handleNeutralClick}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={handleBadClick}>
        Bad
      </button>
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
