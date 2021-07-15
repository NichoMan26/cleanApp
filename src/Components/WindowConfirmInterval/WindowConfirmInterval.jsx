import PORT from '../../assets/config';
import cls from './WindowConfirmInterval.module.css'

function WindowConfirmInterval(props) {



  async function delHour(){
    await fetch(PORT + 'interval', {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        id:props.hourId
      })
    })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      props.deleteInterval(props.hourId)
      props.setdeleteConfirm(false)
    });
   
  }

  const cancelDelHour = () => {
    props.setdeleteConfirm(false)
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.window}>
        <p className={cls.header}>Удалить {}</p>
        <div className={cls.buttonWrapper}>
          <div onClick={()=>{delHour()}} 
                className={cls.button}>Удалить</div>
          <div onClick={()=>{cancelDelHour()}} 
                className={cls.button}>Отмена</div>
        </div>
      </div>
    </div>
  );
}

export default WindowConfirmInterval;
