import cls from './HoursRow.module.css'
import {getHours, getIntervalMS, getTime} from '../../assets/time.js'
import HoursBottomRow from '../HoursBottomRow/HoursBottomRow'
import EditButtonsHours from '../EditButtonsHours/EditButtonsHours'
import { useState } from 'react'
import HoursForm from '../HoursForm/HoursForm'

function HoursRow(props) {

  const [hoursForm, setHoursForm] = useState({isShow:false,intervalId:0})
  
  let totalHours = 0
  let output = props.intervals.map((el, idx) => {
    let time = getIntervalMS(el.start, el.finish)
    if(el.finish !== 0){
      totalHours += +time
    } 
    return <li className={cls.row} style={idx % 2 === 0 ? {background:'#cccccc'} : {background:'white'}} key={idx}>
            <span>{getTime(el.start)}</span>
            <span>{el.finish === 0 ? 'в процессе...' : getTime(el.finish)}</span>
            <span>{el.finish === 0 ? 'в процессе...' : getHours(time)}</span>
            {el.finish !== 0 
              ?<EditButtonsHours deleteInterval={props.deleteInterval}
                                setHoursForm={setHoursForm}
                                hourId={el.id}
                                
                                /> 
              : <span></span>}
            </li>
  })
  return (
    <ul className={cls.wrapper}>
      {hoursForm.isShow 
        ? <HoursForm intervalId={hoursForm.intervalId}
                      intervals={props.intervals}
                      setHoursForm={setHoursForm}
                      changeInterval={props.changeInterval}
                 /> 
        : null}
      <li className={cls.commonRow}>
        <span>Начало</span>
        <span>Конец</span>
        <span>Время (ч:м)</span>
        <span></span>
      </li>
      {output}
      <HoursBottomRow totalHours={totalHours}
                      addInArchive={props.addInArchive}/>
    </ul>
  );
}

export default HoursRow;
