import cls from './NewCarBTN.module.css'
import { PlusCircleFill} from 'react-bootstrap-icons';
import { getPlace } from '../../assets/sort';
import PlaceSwitcher from '../PlaceSwitcher/PlaceSwitcher';

function NewCarBTN(props) {
  const createNewCar = () => {
    props.setFullCar({id:null, car:'', creater:props.app.userName ,place:getPlace(props.app.userName), number:'',service:'P', washer:'', comment:''})
    props.setIsCreateNew(true)
    props.setCarFormIsOpen(true)

  }
  return (
    <div className={cls.wrapper}>
      <span></span>
      <div onClick={()=>createNewCar()} 
          className={cls.button}>
          <span>Добавить авто</span>
          <PlusCircleFill className={cls.iconPlus}/>
      </div>
      {props.app.userName === 'Sergey' || props.app.userName === 'Denis'
        ? <PlaceSwitcher showDaysCars={props.showDaysCars}
                    setIsFetch={props.setIsFetch}
                    /> 
        : null}
    </div>
  );
}

export default NewCarBTN;
