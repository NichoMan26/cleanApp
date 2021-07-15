import { useEffect } from 'react';
import PORT from '../../assets/config';
import HoursRow from '../HoursRow/HoursRow';
import NewInterval from  '../NewInterval/NewInterval';
import cls from './Hours.module.css'


function Hours(props) {
  useEffect(() => {
    fetch(PORT + 'interval', { method: 'get' })
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        props.setIntervals(JSON.parse(data))
      });
  }, [])

  return (
    <div>
      <NewInterval setStartNewInterval={props.setStartNewInterval}
                   setFinishNewInterval={props.setFinishNewInterval}
                   currentInterval={props.hours.currentInterval}
                   isInterval={props.hours.isInterval}
                   setIsIntervals={props.setIsIntervals}
                  />
      <HoursRow intervals={props.hours.intervals}
                deleteInterval={props.deleteInterval}
                changeInterval={props.changeInterval}
                addInArchive={props.addInArchive}
                />
    </div>
  );
}

export default Hours;
