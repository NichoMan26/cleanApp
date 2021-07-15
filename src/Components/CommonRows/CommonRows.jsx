import { getPrice, getServiceColor } from '../../assets/common'
import { getTime } from '../../assets/time'
import CommentButtons from '../CommentButton/CommentButton'
import CountRow from '../CountRow/CountRow'
import EditButtons from '../EditButtons/EditButtons'
import cls from './CommonRows.module.css'
import noCars from '../../img/car.gif'

function CommonRows(props) {
  
  
  let totalCount = 0
  let input = props.cars.map((e, idx)=> {

    let color = getServiceColor(e.service)
  
    totalCount += e.washer === e.creater || e.washer === '' 
                    ? getPrice(e.service) * 2
                    : getPrice(e.service)
    return <li data-id={e.id} 
                style={idx % 2 === 0 ?{background:'white'}:{background:'#ccc'}} 
                className={props.app.appMode === 'COUNT' ? cls.commonRow_count : cls.commonRow}
                key={e.id}>
              <span className={cls.number}>{idx + 1}</span>
              <span>{e.car}</span>
              <span style={{background:color,borderBottom:'1px solid grey',textAlign:'center'}}>{e.service}</span>
              {props.app.appMode === 'COUNT'
                ? <span style={{padding:'0 0 0 3px'}}>{
                  e.washer === e.creater || e.washer === '' 
                    ? getPrice(e.service) * 2
                    : getPrice(e.service)
                  }</span>
                : null} 
              <span style={{padding:'0 0 0 3px'}}>{e.number}</span>
              <span >{`${getTime(e.id)}`}</span>
              {e.washer !== e.creater 
                ? <span>{e.washer} <span className={cls.bold}>{e.creater}</span></span>
                : <span className={cls.bold}>{e.creater}</span>}
              {e.comment 
                ? <CommentButtons 
                  comment={e.comment}
                  car={e.car}
                  />
                : <div></div>}  
              {/* {(e.creater ===  props.app.userName && props.app.appMode === 'CREATE') 
                || (props.app.userName === 'Sergey') // props.app.userName === 'Denis' */}
                <EditButtons car={e} 
                              creater={e.creater}
                              appMode={props.app.appMode}
                              userName={props.app.userName}
                              setIsCreateNew={props.setIsCreateNew}
                              deleteCar={props.deleteCar}
                              setCarFormIsOpen={props.setCarFormIsOpen}
                              setFullCar={props.setFullCar}
                /> 
                
           </li>
  })

  return (
    <>
    {props.cars.length === 0 
      ? <div className={cls.noCars}>
          <p className={cls.noCars__p}>Нет помытых машин...</p>
          <img className={cls.noCars__img} src={noCars} alt="car"/>
        </div>
      : <ul className={cls.commonRows}>
        {input}
        {props.app.appMode === 'COUNT'
          ? <CountRow totalCount={totalCount}/>
          : null}
      </ul>}
    </>
  );
}

export default CommonRows;
