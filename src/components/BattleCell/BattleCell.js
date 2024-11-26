import { useAIOpponent, useBattleSequence } from 'hooks';
import styles from './styles.module.css';
import { BattleAnnouncer, BattleMenu, TextBox } from 'components';
import { useEffect, useState } from 'react';
import { opponentStats, playerStats, wait } from 'shared';

export const BattleCell = ({ onGameEnd }) => {
  const [sequence, setSequence] = useState({});

  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    announcerMessage,
    playerAnimation,
    opponentAnimation,
  } = useBattleSequence(sequence);

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });
    }
  }, [turn, aiChoice, inSequence]);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1000);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <>
      <div className={styles.opponent}>
        <div className={styles.txtbox}>
          <TextBox
            main={false}
            health={opponentHealth}
            name={opponentStats.name}
            level={opponentStats.level}
            maxHealth={opponentStats.maxHealth}
          />
        </div>
      </div>

      <div className={styles.characters}>
        <div className={styles.gameHeader}>
          {playerStats.name} vs {opponentStats.name}
        </div>

        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              alt={playerStats.name}
              src={playerStats.img}
              className={styles[playerAnimation]}
            />
          </div>

          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              className={styles[opponentAnimation]}
            />
          </div>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.txtbot}>
          <TextBox
            main={true}
            health={playerHealth}
            name={playerStats.name}
            level={playerStats.level}
            maxHealth={playerStats.maxHealth}
          />
        </div>

        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer
              message={
                announcerMessage ||
                `C'est le tour de ${playerStats.name}, que faire ?`
              }
            />
          </div>

          {!inSequence && turn === 0 && (
            <div className={styles.hudChild}>
              <BattleMenu
                onAttack={() => setSequence({ turn, mode: 'attack' })}
                onMagic={() => setSequence({ turn, mode: 'magic' })}
                onHeal={() => setSequence({ turn, mode: 'heal' })}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
