import cls from './Header.module.css'
import logo from '../../img/logo.png'
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import { getPlace } from '../../assets/sort';
import PORT from '../../assets/config';
import { useEffect } from 'react';
import { MONTHS } from '../../assets/arrs';


function Header(props) {

  const reportFunc = () => {
    let mode = props.app.appMode === 'CREATE' ? 'REPORT' : 'CREATE'
    props.setAppMode(mode)
  }

  
  // const changePlace = () => {
  //   props.setPlace(props.app.place === 'V' ? 'K' : 'V')
  // }
  useEffect(() => {
    fetch(PORT + 'interval', { method: 'get' })
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        props.setIntervals(JSON.parse(data))
      });
  }, [])


  const date = new Date()
  var months = MONTHS
  //let today = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

  return (
    <div className={cls.header}>
      <img className={cls.logo} 
            src={logo}
            onClick={() => reportFunc()} 
            alt="Bilar" />
      <p onClick={() => {
          localStorage.clear()
        }}
        className={cls.userName}>
        {props.app.userName}
        <span  className={ getPlace(props.app.userName) === 'V' ? cls.place__V : cls.place__K}>
          {getPlace(props.app.userName) === 'V' ? 'Vantaa' : 'Kerava'}
        </span>
      </p>
      <div className={cls.period}>
        <HeaderButtons 
          showDaysCars={props.showDaysCars}
          setAppMode={props.setAppMode}
          userName={props.app.userName}
          isInterval={props.isInterval}
           />
        {/* <p className={cls.date}>{today}</p> */}
      </div>
    </div>
  );
}

export default Header;
