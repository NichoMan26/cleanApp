import {getPlace, sortArray} from "../assets/sort"
import PORT from '../assets/config.js'

const SET_CAR_NAME = 'SET_CAR_NAME'
const SET_CAR_SERVICE = 'SET_CAR_SERVICE'
const SET_CAR_NUMBER = 'SET_CAR_NUMBER'
const SET_CAR_WASHER = 'SET_CAR_WASHER'
//const SET_CAR_PLACE = 'SET_CAR_PLACE'
const SET_CAR_COMMENT = 'SET_CAR_COMMENT'
const SET_CAR_ID = 'SET_CAR_ID'
const SET_CAR_SOCKET = 'SET_CAR_SOCKET'
const SAVE_NEW_CAR = 'SAVE_NEW_CAR'
const DELETE_CAR = 'DELETE_CAR'
const SET_FULL_CAR = 'SET_FULL_CAR'
const UPDATE_CAR = 'UPDATE_CAR'
const SET_CARS = 'SET_CARS'
const SHOW_DAY_CARS = 'SHOW_DAY_CARS'


///////********************/////////////
// let initState = {
//     isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
//
// }

let initState = {
  cars: [],
  newCar: {
    id: null,
    car: '',
    creater: localStorage.getItem('nameBilar') || '',
    place: getPlace(localStorage.getItem('nameBilar')),
    number: '',
    service: 'P',
    washer: '',
    comment: ''
  }
}

const carsReducer = (state = initState, action) => {
  switch (action.type) {
      case SET_CAR_NAME:
        return {
          ...state, newCar: {
            ...state.newCar,
            car: action.carName
          }
        }
      case SET_CAR_SERVICE:
        return {
          ...state, newCar: {
            ...state.newCar,
            service: action.carService
          }
        }
      case SET_CAR_NUMBER:
        return {
          ...state, newCar: {
            ...state.newCar,
            number: action.carNumber
          }
        }
      case SET_CAR_WASHER:
              return {
                ...state, newCar: {
                  ...state.newCar,
                  washer: action.carWasher
                }
        }
      case SET_CAR_COMMENT:
                  return {
                    ...state, newCar: {
                      ...state.newCar,
                      comment: action.carComment
                    }
        }
      case SET_CAR_ID:
                  return {
                    ...state, newCar: {
                      ...state.newCar,
                      id: action.carId
                    }
        }
      case SET_CAR_SOCKET:
        let isPush = true
        for(let i = 0; i < state.cars.length; i++){
          if(state.cars[i].id === action.car.id){
            isPush = false
          }
        }
        if(isPush){
          return {
            ...state, cars: [...state.cars, action.car]
            }
        } else {
          return {
            ...state
            }
        }
        

      case SAVE_NEW_CAR:
        return {
          ...state, cars: [...state.cars, state.newCar], newCar: {
            id: null,
            car: '',
            creater: localStorage.getItem('nameBilar'),
            place: getPlace(localStorage.getItem('nameBilar')),
            number: '',
            service: 'P',
            washer: '',
            comment: ''
          }
        }
      case DELETE_CAR:
                      let carsArr = [...state.cars]
                      let obj = {
                        carId: action.carId
                      }
                      fetch(PORT, {
                        method: 'DELETE',
                        headers: new Headers({
                          Accept: 'application/json',
                          'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify(obj)
                      })
                      let sortArr = sortArray(carsArr, action.carId)
                      return {
                        ...state, cars: sortArr
        }
      case SET_FULL_CAR:
        return {
                          ...state, newCar: action.fullCar
                        }
      case UPDATE_CAR:
                          fetch(PORT, {
                            method: 'PUT',
                            headers: new Headers({
                              Accept: 'application/json',
                              'Content-Type': 'application/json'
                            }),
                            body: JSON.stringify(state.newCar)
                          })
                          let carsArr1 = [...state.cars] //TODO fix this shit!
                          let sortArr1 = carsArr1.map(el => {
                            if (el.id === action.carId) {
                              return state.newCar
                            } else {
                              return el
                            }
                          });
                          return {
                            ...state, cars: sortArr1
        }
      case SET_CARS:
                            return {
                              ...state, cars: action.cars
        }
      case SHOW_DAY_CARS:
        let cars = action.carsWithPlace.cars.filter((el) => {
          if(el.place === action.carsWithPlace.place){
            return el
          }
        })
                              return {
                                ...state, cars: cars
        }
                            default:
                              return state
  }
}
export const setCarName = (carName) => ({type: SET_CAR_NAME,carName})
export const setCarService = (carService) => ({  type: SET_CAR_SERVICE,  carService})
export const setCarNumber = (carNumber) => ({  type: SET_CAR_NUMBER,  carNumber})
export const setCarWasher = (carWasher) => ({  type: SET_CAR_WASHER,  carWasher})
export const setCarComment = (carComment) => ({  type: SET_CAR_COMMENT,  carComment})
export const setCarId = (carId) => ({  type: SET_CAR_ID,  carId})
export const setCarSocket = (car) => ({  type: SET_CAR_SOCKET,  car})
export const saveNewCar = () => ({  type: SAVE_NEW_CAR})
export const deleteCar = (carId) => ({  type: DELETE_CAR,  carId})
export const setFullCar = (fullCar) => ({  type: SET_FULL_CAR,  fullCar})
export const updateCar = (carId) => ({  type: UPDATE_CAR,  carId})
export const setCars = (cars) => ({  type: SET_CARS,  cars})
export const showDaysCars = (carsWithPlace) => ({  type: SHOW_DAY_CARS,  carsWithPlace})
export default carsReducer