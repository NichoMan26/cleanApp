import cls from './CountRow.module.css'
function CountRow(props) {
  return (
    <div className={cls.countRow}>
      <span></span>
      <span></span>
      <span></span>
      <span>{props.totalCount}€</span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default CountRow;
