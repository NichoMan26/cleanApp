
import { SERVICES, WASHERS } from '../../assets/arrs';
import { translit } from '../../assets/common';
import { fetchSaveNewCar } from '../../assets/fetch'
import { createServices, createWashers } from '../../assets/sort'
import cls from './CarForm.module.css'
function CarForm(props) {
  const setCarName = (e) => {
   props.setCarName(translit(e.currentTarget.value.toUpperCase()))
  }
  const setCarService = (e) => {
   props.setCarService(e.currentTarget.value)
  }
  const setCarNumber = (e) => {
   props.setCarNumber(translit((e.currentTarget.value.toUpperCase())))
  }
  
  const setCarWasher = (e) => {
   props.setCarWasher(e.currentTarget.value)
  }
  const setCarComment = (e) => {
   props.setCarComment(translit((e.currentTarget.value)))
  }
  const saveCarIsSuccess = () => {
    props.saveNewCar()
    props.setNotification({status:'success', text:'Машина была добавлена', isNotification:true})
  }
  const saveCarIsError = () => {
    props.setNotification({status:'error', text:'Произошла ошибка проверте автомобиль', isNotification:true})
  }
  async function saveNewCar(e) {
    e.preventDefault()
    if(props.isCreateNew){
      let d = new Date()
      let id = d.getTime()
      
      props.setCarId(id)
      fetchSaveNewCar({...props.state.newCar,id}, saveCarIsSuccess, saveCarIsError)
    } else{
      props.updateCar(props.state.newCar.id)
    }
    
    props.setCarFormIsOpen(false)
  }
  // const saveNewCar = (e) => {
  //   e.preventDefault()
  //   props.isCreateNew 
  //     ? props.saveNewCar()
  //     : props.updateCar(props.state.newCar.id)
    
  //   props.setCarFormIsOpen(false)
  // }
  const closeCarForm = (e) => {
    e.preventDefault()
    props.setCarFormIsOpen(false)
  }
  let notCreater = false
  if(!props.isCreateNew){
    notCreater = props.userName !== props.state.newCar.creater
  }
  if(props.userName === 'Sergey'){
    notCreater = false
  }
 
  return (
    <div className={cls.carForm}>
      
      <form className={cls.form}>
        <p className={cls.header}>{props.isCreateNew ? 'Создать новый': 'Редактировать'} атомобиль</p>
          <div className={cls.inputWrapper}>
            <label className={cls.label}>Машина</label>
            <input disabled={notCreater} value={props.state.newCar.car} 
                    onChange={(e)=>setCarName(e)} 
                    type="text" 
                    list='models'
                    placeholder='BMW или MB'/>
              <datalist id='models'>
                <option value="AUDI"/>
                <option value="BMW"/>
                <option value="BONUS"/>
                <option value="CITROEN"/>
                <option value="CHRYSLER"/>
                <option value="DODGE"/>
                <option value="FORD"/>
                <option value="HONDA"/>
                <option value="HYUNDAI"/>
                <option value="JAGUAR"/>
                <option value="KIA"/>
                <option value="LEXUS"/>
                <option value="MAZDA"/>
                <option value="MB"/>
                <option value="MITSUBISHI"/>
                <option value="NISSAN"/>
                <option value="OPEL"/>
                <option value="PEUGEOT"/>
                <option value="RENAULT"/>
                <option value="SEAT"/>
                <option value="SKODA"/>
                <option value="TESLA"/>
                <option value="TOYOTA"/>
                <option value="VOLVO"/>
                <option value="VW"/>
              </datalist>

          </div>
          <div className={cls.inputWrapper}>
            <label className={cls.label}>Вид</label>
            <select className={cls.select} 
                    disabled={notCreater}
                    onChange={(e) => {setCarService(e)}}>
                     
             {createServices(SERVICES,props.state.newCar.service)}
           </select>
          </div>
          <div className={cls.inputWrapper}>
            <label className={cls.label} >Номер</label>
            <input type="text" 
                    disabled={notCreater}
                    placeholder='XXX-000 или 12345'
                    onChange={(e) => {setCarNumber(e)}}
                    value={props.state.newCar.number}/>
          </div>
          <div className={cls.inputWrapper}>
            <label className={cls.label}>Мойщик</label>
            <select className={cls.select} 
                    disabled={notCreater}
                    onChange={(e)=>{setCarWasher(e)}}>
              {createWashers(['',...WASHERS],props.state.newCar.washer)}
           </select>
          </div>
          
          <div className={cls.inputWrapper}>
            <label className={cls.label} >Комент</label>
            <input type="text" 
                    placeholder='Напишите комментарий...'
                    onChange={(e) => {setCarComment(e)}}
                    value={props.state.newCar.comment}/>
          </div>
          <div className={cls.inputWrapper}>
            <button onClick={(e)=>{saveNewCar(e)}}
                    className={cls.button}>Сохранить</button>
            <button onClick={(e)=>{closeCarForm(e)}} 
                    className={cls.button}>Отмена</button>
          </div>
        
      </form>
    </div>
  );
}

export default CarForm;
