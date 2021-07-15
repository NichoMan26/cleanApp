import { MONTHS } from "./arrs"

export const getTime = (timeS) => {
  let d = new Date(timeS)
  let date = `${d.getDate()} ${MONTHS[+d.getMonth()]} `
  String(d.getHours()).length === 1 
    ? date +=`0${d.getHours()}:`
    : date +=`${d.getHours()}:`
  String(d.getMinutes()).length === 1 
    ? date +=`0${d.getMinutes()}`
    : date +=`${d.getMinutes()}`
  return date 
}
export const getIntervalMS = (timeSStart,timeSFinish) => {
  return Math.abs(new Date(timeSStart) - new Date(timeSFinish))
}
export const getHours = (timeMS) => {
  let dDiff = timeMS / 1000 / 60 // minutes
  let dHours = Math.floor(dDiff / 60 )
  let dMinutes = Math.ceil(dDiff - (dHours * 60))
  return `${dHours}:${dMinutes}`
}

