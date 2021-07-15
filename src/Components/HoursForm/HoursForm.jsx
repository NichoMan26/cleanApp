import cls from './HoursForm.module.css'
import { useState } from 'react';
import { MONTHS } from '../../assets/arrs';
import PORT from '../../assets/config';

function HoursForm(props) {
  let changeInterval = props.intervals.filter((el) => {
    return el.id === props.intervalId
  })
  let dStart = new Date (changeInterval[0].start)
  let dFinish = new Date (changeInterval[0].finish)



  function getFormatTime(time){
    let hours = time.getHours().toString().length === 1 
      ? '0' + time.getHours() 
      : time.getHours() 
    let minutes = time.getMinutes().toString().length === 1 
      ? '0' + time.getMinutes() 
      : time.getMinutes()
        return hours + ':' + minutes
  }
  const [timeStart, setTimeStart] = useState(getFormatTime(dStart))
  const [timeFinish, setTimeFinish] = useState(getFormatTime(dFinish))
  

  function changeTime(date, time) {
    let hours = time.split(':')[0]
    let dateWithHours = date.setHours(hours)
    let minutes = time.split(':')[1]
      return new Date(dateWithHours).setMinutes(minutes)
  }

  let newTimeStart = changeTime(dStart, timeStart)
  let newTimeFinish = changeTime(dFinish, timeFinish)

  async function pressChange(e) {
    e.preventDefault()
    await fetch(PORT + 'interval', {
      method: 'PUT',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id:changeInterval[0].id, start:newTimeStart,finish:newTimeFinish,isArchive:false
      })
    })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      props.setHoursForm(false)
      props.changeInterval({
        id:changeInterval[0].id, start:newTimeStart,finish:newTimeFinish,isArchive:false
      })
    });
  }
  return (
    <div  className={cls.wrapper}>
      <form className={cls.form}>
        <p className={cls.header}>Изменить интервал</p>
        <label className={cls.label}>
          <p>Начало: {dStart.getDate() + ' ' + MONTHS[dStart.getMonth()]}</p>
          <input className={cls.input} type="time" 
                value={timeStart}
                onChange={(e)=>{
                  setTimeStart(e.currentTarget.value);
          }}/>
        </label>
        <label className={cls.label}>
          <p>Конец: {dFinish.getDate() + ' ' + MONTHS[dFinish.getMonth()]}</p>
          <input className={cls.input} type="time" 
                value={timeFinish}
                onChange={(e)=>{
                  setTimeFinish(e.currentTarget.value);
          }}/>
        </label>
        <div className="di">
          <button onClick={(e) => {pressChange(e)}} className={cls.button}>Изменить</button>
          <button onClick={() => props.setHoursForm(false)} className={cls.button}>Отменить</button>
        </div>
        
        
      </form>
    </div>
  );
}

export default HoursForm;
