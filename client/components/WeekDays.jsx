import React, {Component} from 'react';
import AppSettings from './AppSettings';

export default class WeekDays extends Component{
    render(){
        const weekDays = AppSettings.days.map( (el, i) => {
            return (
                <div key = {i} className = 'cell'> {el} </div>
            )
        });

        return(
            <div className = 'week-days'>{weekDays}</div>
        )
    }
}
