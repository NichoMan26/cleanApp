import cls from './Card.module.css'
import { ArrowLeft} from 'react-bootstrap-icons';
import  { SERVICES_ALGORITM as S_A }  from '../../assets/arrs';


function Card({service, setCurrentCard}) {
  const STEPS_LAYOUT = S_A[service].steps.map((el,idx) => {
    return <li className={cls.row} key={idx}>{idx + 1}. {el}</li>
  })
   
  return (
    <div className={cls.wrapper}>
      <div className={cls.header}>
        <ArrowLeft onClick={() => {setCurrentCard('')}} className={cls.back} color='yellow'/>
        <span className={cls.service__span}>
          {service + ' - '}
          {S_A[service].serv_fi}
        </span>
        <span className={cls.blank}></span>
      </div>
      <p className={cls.header__rus}>{S_A[service].serv_ru}</p>
      <ul className={cls.body}>
        {STEPS_LAYOUT}
      </ul>
    </div>
  );
}

export default Card;
