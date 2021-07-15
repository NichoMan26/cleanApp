import cls from './WindowConfirms.module.css'

function WindowConfirms(props) {



  return (
    <div className={cls.wrapper}>
      <div className={cls.window}>
        <p className={cls.header}>{props.header}</p>
        <div className={cls.buttonWrapper}>
          <div onClick={()=>{props.confirmFunc()}} 
              className={cls.button}>
            {props.buttonConfirm}
          </div>
          <div onClick={()=>{props.cancelFunc()}} 
              className={cls.button}>
            {props.buttonCancel}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowConfirms;
