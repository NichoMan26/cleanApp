import PORT from "./config";


export const fetchSaveNewCar = (data, funSuccess, funError) => {
  fetch(PORT, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(data)
  })
  .catch((err)=>{
    funError()
  })
  .then((response) => {
    if(response && response.statusText === 'OK'){
      funSuccess()
    }
  })
}