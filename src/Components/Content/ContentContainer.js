import {connect} from 'react-redux'
import Content from './Content.jsx'
import {saveNewCar,deleteCar,setFullCar,updateCar,showDaysCars,setCars, setCarSocket} from '../../redux/carsReducer.js'
import {checkPassName,setAppMode,setNotification,setIsFetch,} from '../../redux/appReducer.js'
import {setStartNewInterval, setFinishNewInterval, setIntervals, setIsIntervals, 
        deleteInterval, changeInterval, addInArchive} from '../../redux/hoursReducer.js'


let mapStateToProps = (state) => {
    return {
        cars: state.cars,
        app: {...state.app.app},
        hours:{...state.hours}
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
        saveNewCar: (newCar) => {
            dispatch(saveNewCar(newCar))
        },
        deleteCar: (idCar) => {
            dispatch(deleteCar(idCar))
        },
        setCarSocket: (car) => {
            dispatch(setCarSocket(car))
        },
        setFullCar: (fullCar) => {
            dispatch(setFullCar(fullCar))
        },
        updateCar: (carId) => {
            dispatch(updateCar(carId))
        },
        showDaysCars: (cars) => {
            dispatch(showDaysCars(cars))
        },
        checkPassName: (userData) => {
            dispatch(checkPassName(userData))
        },
        setCars: (cars) => {
            dispatch(setCars(cars))
        },
        setAppMode: (mode) => {
            dispatch(setAppMode(mode))
        },
        setNotification: (notificationObj) => {
            dispatch(setNotification(notificationObj))
        },
        setIsFetch: (fetching) => {
            dispatch(setIsFetch(fetching))
        },
        setStartNewInterval: (interval) => {
            dispatch(setStartNewInterval(interval))
        },
        setFinishNewInterval: (finishTime) => {
            dispatch(setFinishNewInterval(finishTime))
        },
        setIntervals: (intervals) => {
            dispatch(setIntervals(intervals))
        },
        setIsIntervals: (isIntervals) => {
            dispatch(setIsIntervals(isIntervals))
        },
        deleteInterval: (idIntervals) => {
            dispatch(deleteInterval(idIntervals))
        },
        changeInterval: (newInterval) => {
            dispatch(changeInterval(newInterval))
        },
        addInArchive: () => {
            dispatch(addInArchive())
        },
        

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)