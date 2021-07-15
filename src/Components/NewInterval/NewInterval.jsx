import { useEffect, useState } from 'react';
import PORT from '../../assets/config';
import cls from './NewInterval.module.css'


function NewInterval(props) {
    
  const [buttonDisable, setButtonDisable] = useState(props.isInterval)

  useEffect(() => {
    setButtonDisable(props.isInterval)
  },[props.isInterval]);

  async function pressStart() {
    setButtonDisable(!buttonDisable)
    let d = new Date().getTime()
    await fetch(PORT + 'interval', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id:d, start:d,finish:0,isArchive:false
      })
    })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      props.setStartNewInterval({id:d,start:d,finish:0,isArchive:false})
      props.setIsIntervals(true)
    });
  }

  async function pressFinish() {
    setButtonDisable(!buttonDisable)
    let d = new Date().getTime()
    await fetch(PORT + 'interval', {
      method: 'PUT',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        ...props.currentInterval, finish:d
      })
    })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      props.setFinishNewInterval(d)
      props.setIsIntervals(false)
    });
    
  }
  return (
    <div className={cls.wrapper}>
      <button disabled={buttonDisable} 
              onClick={() => {pressStart()}}
              style={buttonDisable ? {background:'#ccc'} : null}
              className={`${cls.button} ${cls.button_right}`}>
        Начать
      </button>
      <span>
        00:00
      </span>
      <button disabled={!buttonDisable}
              onClick={() => {pressFinish()}}
              style={!buttonDisable ? {background:'#ccc'} : null} 
              className={`${cls.button} ${cls.button_left}`}>
        Закончить
      </button>
    </div>
  );
}

export default NewInterval;
