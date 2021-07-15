
import { WASHERS } from '../assets/arrs.js';

export const sortArray = (arr, curEl) =>{ // exlude curEl from arr
  let newArr = []
  arr.forEach(element => {
    if(element.id !== curEl){
      newArr.push(element)
    }
  });
  return newArr
}
export const getElFromArr = (arr, curEl) => { // get curEl from arr
  let delCar = {}
  arr.forEach(element => {
    if(element.id === curEl){
      delCar = {...element}
    }
  });
  return delCar
}

export const createWashers = (arr, val) => {
    let output = arr.map((el,idx) => {
      return el.name === val 
        ? <option key={idx} selected value={el.name}>
            {el.name}
          </option>
        : <option key={idx} value={el.name}>
        {el.name}
      </option>
      }
    )
    return output
}
export const createServices = (arr, val) => {
  let output = arr.map((el,idx) => {
    return el.latter === val 
      ? <option key={idx} selected value={el.latter}>
          {`${el.latter} - ${el.name}`}
        </option>
      : <option key={idx} value={el.latter}>
        {`${el.latter} - ${el.name}`}
        </option>
    }
  )
  return output
}
export const createOptions = (arr, val) => {
  let output = arr.map((el,idx) => {
    return el === val 
      ? <option key={idx} selected value={Array.isArray(el) ? el[0] : el}>
          {Array.isArray(el) ? `${el[0]} - ${el[1]}` : el}
        </option>
      : <option key={idx} value={Array.isArray(el) ? el[0] : el}>
          {Array.isArray(el) ? `${el[0]} - ${el[1]}` : el}
        </option>
    }
  )
  return output
}
export const getPlace = (userName) => {
  let place
  WASHERS.map((el) => {
    if(el.name === userName){
      place = el.place
    }
  })
  return place
}