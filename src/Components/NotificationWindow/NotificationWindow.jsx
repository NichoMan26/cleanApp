
import cls from './NotificationWindow.module.css'

import { X } from 'react-bootstrap-icons';

function NotificationWindow(props){
 
  let color = '#7c7cf3'
  let header = 'Уведомление'
  switch (props.status) {
    case 'error': 
      color = '#ef2a2a'
      header = 'Ошибка'
      break;
    case 'success': 
      color = '#69cc69'
      header = 'Успех'
      break;  
    default: 
      color = '#7c7cf3'
      header = 'Уведомление'
  }
  
  return<div className={cls.wrapper}>
    <p className={cls.header} style={{background:color}}>
        {header}
        <span>
          <X onClick={()=>{props.setNotification({stauts:'', text:'', isNotification:false})}} className={cls.cross} style={{fontSize:'20px'}} />
        </span>
    </p>
    <p className={cls.text}>{props.text}</p>
  </div>
}

export default NotificationWindow