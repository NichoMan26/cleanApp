import { useState } from 'react';
import { SERVICES } from '../../assets/arrs';
import { getServiceColor } from '../../assets/common';
import Card from '../Card/Card';
import cls from './Cards.module.css'


function Cards(props) {
   
   const [currentCard, setCurrentCard] = useState('')
   const chooseCard = (e) => {
      setCurrentCard(e.currentTarget.getAttribute('data-service'));
   }
  const LAYOUT = SERVICES.map((el, idx) => {
    let color = getServiceColor(el.latter)
   return <div key={idx} data-service={el.latter} onClick={(e)=>{chooseCard(e)}} style={{background:color}} className={cls.card}>
              <span className={cls.latter}>{el.latter}</span>
            </div>
  
})
  return (<>
      {currentCard === '' 
      ? <div className={cls.wrapper}>{LAYOUT}</div>
      : <Card  service={currentCard}
               setCurrentCard={setCurrentCard}/>}
      </>
  );
}

export default Cards;
