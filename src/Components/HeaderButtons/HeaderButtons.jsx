import cls from './HeaderButtons.module.css'
import { Smartwatch, CalendarDate, Search , JournalText, ArrowClockwise} from 'react-bootstrap-icons';


function HeaderButtons(props) {
  
const showOneDay = () => {
  props.setAppMode('CREATE')
  props.showDaysCars()
}
  
  return (
    <div className={cls.wrapper}>
      <div onClick={()=> window.location.reload()} className={cls.iconWrapper}>
        <ArrowClockwise color='yellow'/>
      </div>
      {props.userName === 'Sergey' || props.userName === 'Denis'
        ? <div onClick={()=> props.setAppMode('HOURS')} className={cls.iconWrapper}>
            <Smartwatch color={props.isInterval ? '#69cc69': '#ef2a2a'}/>
          </div>
        : null
      }
      <div onClick={()=> props.setAppMode('TRAINING')} className={cls.iconWrapper}>
        <JournalText color='yellow'/>
      </div>
      <div onClick={()=> props.setAppMode('SEARCH')} className={cls.iconWrapper}>
        <Search color='yellow'/>
      </div>
      <div onClick={()=> showOneDay()} className={cls.iconWrapper}>
        <CalendarDate color='yellow'/>
      </div>
    </div>
  );
}

export default HeaderButtons;
