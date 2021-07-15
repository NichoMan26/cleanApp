import { useEffect, useState } from 'react';
import PORT from '../../assets/config';
import cls from './PlaceSwitcher.module.css'

function PlaceSwitcher(props) {
  const [place, setPlace] = useState('V')

  useEffect(() => {
    props.setIsFetch(true)
    fetch(PORT, { method: 'get' })
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        props.setIsFetch(false)
        props.showDaysCars({cars:JSON.parse(data), place})
      });
  }, [place])
  return (
    <div className={cls.wrapper}>
      <button style={place === 'K' ? {background:'#ccc'} : null} onClick={()=>{setPlace('V')}} className={cls.button + ' ' + cls.button_V}>V</button>
      <button style={place === 'V' ? {background:'#ccc'} : null} onClick={()=>{setPlace('K')}} className={cls.button + ' ' + cls.button_K}>K</button>
    </div>
  );
}

export default PlaceSwitcher;



