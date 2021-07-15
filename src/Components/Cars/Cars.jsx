// import socket from '../../assets/socket'
import CommonRows from '../CommonRows/CommonRows'
import HeaderRow from '../HeaderRow/HeaderRow'
import cls from './Cars.module.css'
import Loader from '../Loader/Loader';



function Cars(props) {
  return (
    <div className={cls.cars}>
      <HeaderRow mode={props.app.appMode}/>
      {props.app.isFetch
        ? <Loader/>
        : <CommonRows cars={props.cars.cars}
                  app={props.app}
                  setIsCreateNew={props.setIsCreateNew}
                  deleteCar={props.deleteCar}
                  setCarFormIsOpen={props.setCarFormIsOpen}
                  setFullCar={props.setFullCar}
                  />
      }
    </div>
  );
}

export default Cars;
