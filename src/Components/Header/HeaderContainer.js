import {
    connect
} from 'react-redux'
import Header from './Header.jsx'
import {checkPassName, setAppMode} from '../../redux/appReducer.js'
import {showDaysCars} from '../../redux/carsReducer.js'
import {setIntervals} from '../../redux/hoursReducer.js'
import PORT from '../../assets/config.js'
import { WASHERS } from '../../assets/arrs.js'


let userName 
let mapStateToProps = (state) => {
    userName = state.app.app.userName
    return {
        ...state.app, isInterval:state.hours.isInterval, 
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        checkPassName: (userData) => {
            dispatch(checkPassName(userData))
        },
        showDaysCars: () => {
            fetch(PORT, {
                    method: 'get'
                })
                .then((response) => {
                    return response.text()
                })
                .then((data) => {
                    let place 
                        WASHERS.filter((el) => {
                        if(el.name === userName){
                            place = el.place
                        } 
                    })
                    dispatch(showDaysCars({cars:JSON.parse(data), place}))
                });

        },
        setAppMode: (appMode) => {
            dispatch(setAppMode(appMode))
        },
        setIntervals: (intervals) => {
            dispatch(setIntervals(intervals))
        },
        // setPlace: (place) => {
        //     dispatch(setPlace(place))
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
