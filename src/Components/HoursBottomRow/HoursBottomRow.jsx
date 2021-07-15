import cls from './HoursBottomRow.module.css'
import {getHours} from '../../assets/time.js'
import { useState } from 'react'
import PORT from '../../assets/config'
import WindowConfirms from '../WindowConfirms/WindowConfirms'




function HoursBottomRow(props) {

  const [archiveConfirm, setdArchiveConfirm] = useState(false)

  function archiveButton() {
    setdArchiveConfirm(true)
  }
  async function addInArchive(){
    await fetch(PORT + 'archive', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      })
    })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      props.addInArchive()
      setdArchiveConfirm(false)
    });
}
const cancelAddInArchive = () => {
  setdArchiveConfirm(false)
}

  return <div className={cls.wrapper}>
            <span></span>
            <span></span>
            <span>{getHours(props.totalHours)}</span>
            <div className={cls.buttonsWrapper}>
              <div onClick={archiveButton} className={cls.button}>
                <span>Архив</span>
              </div>
            </div>
            {archiveConfirm ? <WindowConfirms
                          header={'Архивировать запись?'}
                          buttonConfirm={'Архивировать'}
                          buttonCancel={'Отмена'}
                          confirmFunc={addInArchive}
                          cancelFunc={cancelAddInArchive}
                        /> 
                      : null}
          </div>
}

export default HoursBottomRow;
