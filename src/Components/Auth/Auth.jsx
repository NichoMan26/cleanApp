import { useState } from 'react';
import PORT from '../../assets/config';
import cls from './Auth.module.css'

function Auth(props) {

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

    async function checkUser(user){
      await fetch(PORT + 'user', {
            method: 'POST',
            headers: new Headers({
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
      })
      .then((response) => {
        if(response.status !== 200){
          props.setNotification({status:'error', text:'Неверное имя или пароль', isNotification:true})
        }
        props.setNotification({status:'success', text:'Вход выполнен', isNotification:true})
        return response.text()
      })
      .then((data) => {
        props.checkPassName(JSON.parse(data)[0])
      });
  }
  
  return (
    <div className={cls.wrapper}>
     <form className={cls.form}>
       <p className={cls.header}>Введите имя и пароль.</p>
       <div className={cls.inputWrapper}>
        <label className={cls.label}>Имя:</label>
        <input onChange={(e) => {setUserName(e.currentTarget.value)}} type="text" value={userName}/>
       </div>
       <div className={cls.inputWrapper}>
        <label className={cls.label}>Пароль:</label>
        <input onChange={(e) => {setUserPassword(e.currentTarget.value)}} type="password" value={userPassword}/>
       </div>
       <div onClick={() => {checkUser({name:userName, password: userPassword})}} className={cls.button}>
          Отправить
        </div>
     </form>
    </div>
  );
}

export default Auth;
