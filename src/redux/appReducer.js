import { changedName } from "../assets/common";
import { SEC } from "../assets/arrs";

const CHECK_PASS_NAME = 'CHECK_PASS_NAME'
const SET_APP_MODE = 'SET_APP_MODE'
const SET_NOTIFICATION = 'SET_NOTIFICATION'
const IS_FETCH = 'IS_FETCH'

let nameLS = localStorage.getItem('nameBilar') 
  ? changedName(localStorage.getItem('nameBilar'), SEC, false)
  : null
const initState = {
    app:{
        userName:nameLS || '',
        isFetch: false,
        appMode:'CREATE', //'CREATE','REPORT', 'COUNT', 'SEARCH','TRAINING','HOURS'
        notification: {status:'', text:'', isNotification:false},
      },
}


const appReducer = (state = initState, action) => {  
    switch(action.type){
        case CHECK_PASS_NAME:          
          localStorage.setItem('nameBilar', changedName(action.userData.name, SEC, true))
          return {...state, app:{...state.app, userName:action.userData.name}}
        case SET_APP_MODE:   
          return {...state, app:{...state.app, appMode:action.appMode}}
        case SET_NOTIFICATION:   
          return {...state, app:{...state.app, notification:action.notificatiomObj}}
        case IS_FETCH:   
          return {...state, app:{...state.app, isFetch:action.fetching}}
        default:
            return state
    }
}
export const checkPassName = (userData) => ({type:CHECK_PASS_NAME, userData})
export const setAppMode = (appMode) => ({type:SET_APP_MODE, appMode})
export const setNotification = (notificatiomObj) => ({type:SET_NOTIFICATION, notificatiomObj})
export const setIsFetch = (fetching) => ({type:IS_FETCH, fetching})
export default appReducer