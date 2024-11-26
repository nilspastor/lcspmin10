import styles from './styles.module.css';

export const BattleMenu = ({ onAttack, onMagic, onHeal }) => {
  return (
    <div className={styles.main}>
      <div onClick={onAttack} className={styles.option}>
        Attaquer
      </div>
      <div onClick={onMagic} className={styles.option}>
        Magie
      </div>
      <div onClick={onHeal} className={styles.option}>
        Soin
      </div>
    </div>
  );
};
