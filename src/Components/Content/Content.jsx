import Cars from '../Cars/Cars'
import NewCarBTN from '../NewCarBTN/NewCarBTN';
import cls from './Content.module.css'
import { useState, useEffect } from 'react';
import Report from '../Report/Report';
import PORT from '../../assets/config.js'
import Auth from '../Auth/Auth';
import Search from '../Search/Search';
import NotificationWindow from '../NotificationWindow/NotificationWindow';
import CarFormContainer from '../CarForm/CarFormContainer';
import Training from '../Training/Training';
import Hours from '../Hours/Hours';
import { WASHERS } from '../../assets/arrs';

function Content(props) {
 

  const [carFormIsOpen, setCarFormIsOpen] = useState(false)
  const [isCreateNew, setIsCreateNew] = useState(true)
  
  
  const modeContent = (mode) => {
    if(mode === 'CREATE') {
      return <NewCarBTN app={props.app}
                  showDaysCars={props.showDaysCars}
                  setCarFormIsOpen={setCarFormIsOpen}
                  setIsCreateNew={setIsCreateNew}
                  setFullCar={props.setFullCar}
                  setIsFetch={props.setIsFetch} />
    } else if (mode === 'REPORT' || mode === 'COUNT'){
      return <Report setCars={props.setCars}
                      cars={props.cars}
                      userName={props.app.userName}
                      setAppMode={props.setAppMode}/>
    }else if (mode === 'SEARCH'){
      return <Search setCars={props.setCars}/>
    }
  }
  useEffect(() => {
    props.setIsFetch(true)
    fetch(PORT, { method: 'get' })
      .then((response) => {
        return response.text()
      })
      .then((data) =>{ 
        let place 
        WASHERS.filter((el) => {
          if(el.name === props.app.userName){
            place = el.place
          } 
        })
        props.setIsFetch(false)
        props.showDaysCars({cars:JSON.parse(data), place})
      });
  }, [])

  return (
    <div className={cls.content}>
      {props.app.notification.isNotification
        ? <NotificationWindow text={props.app.notification.text} 
                              setNotification={props.setNotification}
                              status={props.app.notification.status}/>
        : null}
      {props.app.userName === ''
        ? <Auth checkPassName={props.checkPassName}
                setNotification={props.setNotification} />
        : <>
          {modeContent(props.app.appMode)}
          {(() => {
            switch (props.app.appMode) {
              case "TRAINING":   
                return <Training/>
              case "HOURS": 
                return <Hours hours={props.hours}
                              setStartNewInterval={props.setStartNewInterval}
                              setFinishNewInterval={props.setFinishNewInterval}
                              setIntervals={props.setIntervals}
                              setIsIntervals={props.setIsIntervals}
                              deleteInterval={props.deleteInterval}
                              changeInterval={props.changeInterval}
                              addInArchive={props.addInArchive}
                              />
              default:      
                return <Cars cars={props.cars}
                              app={props.app}
                              setCarSocket={props.setCarSocket}
                              deleteCar={props.deleteCar}
                              setIsCreateNew={setIsCreateNew}
                              setCarFormIsOpen={setCarFormIsOpen}
                              setFullCar={props.setFullCar}
                      /> 
            } 
          })()}
        </>}
      {carFormIsOpen ? <CarFormContainer 
                          carFormIsOpen={carFormIsOpen}             
                          setCarFormIsOpen={setCarFormIsOpen}
                          isCreateNew={isCreateNew}/> 
        : null}
    </div>
  );
}

export default Content;
