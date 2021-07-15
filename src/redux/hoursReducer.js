
const START_NEW_INTERVAL = 'START_NEW_INTERVAL'
const FINISH_NEW_INTERVAL = 'FINISH_NEW_INTERVAL'
const SET_INTERVALS = 'SET_INTERVALS'
const SET_IS_INTERVAL = 'SET_IS_INTERVAL'
const DELETE_INTERVAL = 'DELETE_INTERVAL'
const CHANGE_INTERVAL = 'CHANGE_INTERVAL'
const ADD_IN_ARCHIVE = 'ADD_IN_ARCHIVE'


let initState = {
  intervals:[],
  archives:[],
  currentInterval:{id:0,start:0,finish:0,isArchive:false},
  isInterval:false,
}

const hoursReducer = (state = initState, action) => {
  switch (action.type) {
      case START_NEW_INTERVAL:
        return {...state, intervals: [...state.intervals, {...action.newInterval}], currentInterval:{...action.newInterval}}
      //-----------------------------------------------
        case FINISH_NEW_INTERVAL:
        let newIntervals = state.intervals.map((el,idx) => {
          if(el.id === state.currentInterval.id){
            el.finish = action.finishTime
          }
          return el
        })
        return {...state, intervals: newIntervals, currentInterval:{id:0,start:0,finish:0,isArchive:false}}
      //-----------------------------------------------
      case SET_INTERVALS:
        let isInterval = false
        if(action.intervals.length !== 0 && action.intervals[action.intervals.length - 1].finish === 0){
          isInterval = true
        }
        let notArchiveIntervals = action.intervals.filter((el) => {
          return el.isArchive === 0
        })
        let archiveIntervals = action.intervals.filter((el) => {
          return el.isArchive !== 0
        })
        return {...state, 
                intervals: notArchiveIntervals,
                archives:archiveIntervals,
                isInterval,
                currentInterval:{...action.intervals[action.intervals.length - 1]}}
      //-----------------------------------------------
      case SET_IS_INTERVAL:
        return {...state, isInterval:action.isInterval}
      //-----------------------------------------------
      case DELETE_INTERVAL:
        let intervals = state.intervals.filter((el) => {
          return el.id !== action.idInterval
        })
        return {...state, intervals}
      //-----------------------------------------------
      case CHANGE_INTERVAL:
        let changedIntervals = state.intervals.map((el) => {
          if(el.id === action.newInterval.id){
            return action.newInterval
          }
          return el
        })
        return {...state, intervals:changedIntervals}
      //-----------------------------------------------
      case ADD_IN_ARCHIVE: 
        // let interaval = []
        // let a = state.intervals.filter((el) => {
        //   if(el.id !== action.idHours){
        //     return el
        //   } else {
        //     interaval = el
        //   }
        // })
        return {...state, intervals:[], archives:[...state.archives, ...state.intervals ]}
      //-----------------------------------------------
      default:
        return state
  }
}
export const setStartNewInterval = (newInterval) => ({type: START_NEW_INTERVAL,newInterval})
export const setFinishNewInterval = (finishTime) => ({type: FINISH_NEW_INTERVAL,finishTime})
export const setIntervals = (intervals) => ({type: SET_INTERVALS,intervals})
export const setIsIntervals = (isInterval) => ({type: SET_IS_INTERVAL,isInterval})
export const deleteInterval = (idInterval) => ({type: DELETE_INTERVAL,idInterval})
export const changeInterval = (newInterval) => ({type: CHANGE_INTERVAL,newInterval})
export const addInArchive = () => ({type: ADD_IN_ARCHIVE})
export default hoursReducer



