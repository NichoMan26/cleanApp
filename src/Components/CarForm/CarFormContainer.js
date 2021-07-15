import { connect } from 'react-redux'
import CarForm from './CarForm'
import { setCarName, setCarService, setCarNumber,
        setCarWasher, setCarComment, setCarId, saveNewCar,
        updateCar } from '../../redux/carsReducer'
import { setNotification } from '../../redux/appReducer.js'



let mapStateToProps = (state, props) => {
  return {
    carFormIsOpen: props.carFormIsOpen,
    setCarFormIsOpen: props.setCarFormIsOpen,
    isCreateNew: props.isCreateNew,
    state: state.cars,
    userName:state.app.app.userName
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
      setCarName: (carName) => {
          dispatch(setCarName(carName))
      },
      setCarService: (carService) => {
          dispatch(setCarService(carService))
      },
      setCarNumber: (carNumber) => {
          dispatch(setCarNumber(carNumber))
      },
      setCarWasher: (carWasher) => {
        dispatch(setCarWasher(carWasher))
      },
      setCarComment: (carComment) => {
        dispatch(setCarComment(carComment))
      },
      setCarId: (carId) => {
        dispatch(setCarId(carId))
      },
      saveNewCar: (newCar) => {
        dispatch(saveNewCar(newCar))
      },
      updateCar: (carId) => {
        dispatch(updateCar(carId))
      },
      setNotification: (notificationObj) => {
        dispatch(setNotification(notificationObj))
      },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarForm)