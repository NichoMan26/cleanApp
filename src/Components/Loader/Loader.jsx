// import img from '../../img/car.gif'
import cls from './Loader.module.css'

function Loader(props) {
 
  return (
    <div className={cls.wrapper}> 
    loading...
      {/* <img className={cls.img} src={img} alt="car"/> */}
    </div>
  );
}

export default Loader;
