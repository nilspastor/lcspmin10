import { BattleCell, BattleTrigger, EndMenu, MapCell } from 'components';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const App = () => {
  const [mode, setMode] = useState('map');
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div>
      {mode === 'map' && (
        <div className={styles.homepage}>
          <div className={styles.mapwrapper}>
            <div className={styles.maparea}>
              <MapCell />
            </div>
            <div className={styles.battletrigger}>
              <BattleTrigger onStartClick={() => setMode('battle')} />
            </div>
          </div>
        </div>
      )}

      {mode === 'battle' && (
        <div className={styles.battlewrapper}>
          <BattleCell
            onGameEnd={winner => {
              setWinner(winner);
              setMode('gameOver');
            }}
          />
        </div>
      )}

      {mode === 'gameOver' && !!winner && (
        <div className={styles.endwrapper}>
          <EndMenu
            winner={winner}
            onStartClick={() => setMode('battle')}
          />
        </div>
      )}
    </div>
  );
};
