import cls from './EditButtonsHours.module.css'
import { Pencil, TrashFill, FileArrowDown } from 'react-bootstrap-icons';
import { useState } from 'react';
import WindowConfirmInterval from '../WindowConfirmInterval/WindowConfirmInterval';

function EditButtonsHours(props) {
  
  const [deleteConfirm, setdeleteConfirm] = useState(false)

  return (
    <div  className={cls.wrapper}>
      {/* <div className={cls.editButtons}>
        <FileArrowDown onClick={() => {setdArchiveConfirm(true)}}  color='darkGwrey'/>
      </div> */}
      <div className={cls.editButtons}>
        <TrashFill onClick={() => {setdeleteConfirm(true)}}  color='darkGwrey'/>
      </div>
      <div className={cls.editButtons}>
        <Pencil onClick={() => {
          props.setHoursForm({isShow:true,intervalId:props.hourId})}
          }/>
      </div>
      {deleteConfirm  ? <WindowConfirmInterval
                          deleteInterval={props.deleteInterval}
                          setdeleteConfirm={setdeleteConfirm}
                          hourId={props.hourId}
                        /> 
                      : null}
      
    </div>
  );
}

export default EditButtonsHours;
