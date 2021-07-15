import cls from './EditButtons.module.css'
import { Pencil, TrashFill} from 'react-bootstrap-icons';
import WindowConfirm from '../WindowConfirm/WindowConfirm';
import { useState } from 'react';
function EditButtons(props) {
  

  const [deleteConfirm, setdeleteConfirm] = useState(false)

  const editCar = () => {
    props.setIsCreateNew(false)
    props.setFullCar(props.car)
    props.setCarFormIsOpen(true)
  }

  return (
    <div  className={cls.wrapper}>
      {(props.creater === props.userName && props.appMode === 'CREATE') 
        || (props.userName === 'Sergey')
        ?  <div className={cls.editButtons}>
        <TrashFill onClick={() => {setdeleteConfirm(true)}}  color='darkGwrey'/>
      </div>
        : null}
      <div className={cls.editButtons}>
        <Pencil onClick={() => {editCar()}}/>
      </div>
      {deleteConfirm ? <WindowConfirm
                        setdeleteConfirm={setdeleteConfirm}
                        deleteCar={props.deleteCar}
                        car={props.car}
                        /> 
                      : null}
      
    </div>
  );
}

export default EditButtons;
