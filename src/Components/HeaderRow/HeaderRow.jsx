import cls from './HeaderRow.module.css'
function HeaderRow(props) {
  return (
    <div className={props.mode === 'COUNT' ? cls.headerRow_Count : cls.headerRow}>
      <span>№</span>
      <span>Машина</span>
      <span>Вид</span>
      {props.mode === 'COUNT' 
        ? <span style={{padding:'0 0 0 3px'}}>Цена</span>
        : null}
      
      
      <span>Номер</span>
      <span>Время</span>
      <span>Мойщик</span>
    </div>
  );
}

export default HeaderRow;
