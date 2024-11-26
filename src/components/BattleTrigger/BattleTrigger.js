import styles from './styles.module.css';

export const BattleTrigger = ({ onStartClick }) => {
  return (
    <div className={styles.main}>
      <button
        className={styles.battleTriggerButton}
        onClick={onStartClick}
      >
        Commencer combat
      </button>
    </div>
  );
};
