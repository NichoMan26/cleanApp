import cls from './WindowConfirm.module.css'

function WindowConfirm(props) {

  const delCar = () => {
    props.deleteCar(props.car.id)
    props.setdeleteConfirm(false)
  }

  const cancelDelCar = () => {
    props.setdeleteConfirm(false)
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.window}>
        <p className={cls.header}>Удалить {`${props.car.car} ${props.car.number}?`}</p>
        <div className={cls.buttonWrapper}>
          <div onClick={()=>{delCar()}} 
                className={cls.button}>Удалить</div>
          <div onClick={()=>{cancelDelCar()}} 
                className={cls.button}>Отмена</div>
        </div>
      </div>
    </div>
  );
}

export default WindowConfirm;



