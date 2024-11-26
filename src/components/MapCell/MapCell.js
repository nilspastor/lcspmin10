import styles from './styles.module.css';

export const MapCell = () => {
  function DrawTable() {
    let x = 31;
    let y = 31;
    let t =
      '<table cellspacing="0" border="1" cellpadding="0" style="width:744px;height:744px">';
    for (let i = 1; i <= x * y; i++) {
      t += i === 1 ? '<tr>' : '';
      t += `<td class="${i}" cursor:pointer;"></td>`;
      if (i === x * y) {
        t += '</tr>';
      } else {
        t += i % 31 === 0 ? '</tr><tr>' : '';
      }
    }
    t += '</table>';

    return t;
  }

  const htmlContent = DrawTable();

  return (
    <div className={styles.worldmap}>
      <div
        className={styles.gridbox}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};
