import { HealthBar } from 'components';
import styles from './styles.module.css';

const enemyColor = '#821200';
const allyColor = '#1953cb';

export const TextBox = ({
  main = false,
  name,
  level,
  health,
  maxHealth,
}) => {
  return (
    <div
      style={{ backgroundColor: main ? enemyColor : allyColor }}
      className={styles.main}
    >
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.level}>Niv: {level}</div>
      </div>

      <div className={styles.health}>
        <HealthBar label="HP" value={health} maxValue={maxHealth} />
      </div>
    </div>
  );
};
