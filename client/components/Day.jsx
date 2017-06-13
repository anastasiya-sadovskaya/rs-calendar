import React, {Component} from 'react';
import moment from 'moment';
import AppSettings from './AppSettings';
import AppManager from './AppManager';
import Event from './Event.jsx';
// import ReactDOM from 'react-dom';

export default class Day extends Component{
    constructor(props){
        super(props);
        AppManager.days.push(this.props.date);
        // this.state = {
        //     events: [],
        // }
        // // this.day = new Date(AppSettings.currentYear, AppSettings.currentMonth, this.props.date).getDay();
        // this.events = [];
        

        
    }

    addClass(){
        this.className = 'cell';
        if (this.props.isCurrentMonth && AppSettings.currentDate === this.props.date){
            this.className += ' today';
        }
        return this.className;
    }

    // openInfoPanel(){
    //     AppManager.infoPanel.className = 'info-panel';
    // }

    componentWillUpdate(){
        
    }

    

    getFullEventName(){

    }

    openInfoPanel(){
        AppManager.infoPanel.setState({
            // className: 'info-panel',
            // event: AppManager.calendar.state.events[this.props.value],
            // showEventInfo: false,
            // showDayInfo: true,
            date: moment(this.props.value),
            events: AppManager.calendar.state.events[this.props.value]
        });
        console.log('day');
    }
    
    render(){
        //this.value = new Date(this.props.year, this.props.month, this.props.date,20,0,0).toISOString().substr(0,10);
        this.events = [];
        for( let key in AppManager.calendar.state.events){
            if(key === this.props.value){
             AppManager.calendar.state.events[key].map((elem) => {
                this.events.push(elem);
             })
            }
        }

        this.dayEvents = this.events.map((el, i) => {
            //this.events
            return (
                <Event key = {i} event = {el} value = {this.props.value}/>
            )
        })

        return (
            <div
                className = {this.addClass()} 
                //onClick = {this.openInfoPanel.bind(this)}
                // value = {this.props.value}
            >
                <p className = 'date'>{this.props.date}</p>
                
                <div className = 'events'>{this.dayEvents}</div>

            </div>
        )
    }
}

