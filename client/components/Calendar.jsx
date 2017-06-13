import React, {Component} from 'react';
import moment from 'moment';
// import $ from 'jquery';
import AppSettings from './AppSettings';
import AppManager from './AppManager';
import Month from './Month.jsx';
import Header from './Header.jsx';
import WeekDays from './WeekDays.jsx';

export default class Calendar extends Component{
    constructor(props){
        super(props);
        AppManager.calendar = this;
        this.visibleMonth = AppSettings.currentMonth;
            this.visibleYear = AppSettings.currentYear,
            this.firstDay = moment(`${this.visibleYear}-${this.visibleMonth + 1}-01`);
            this.lastDay = this.firstDay.clone().endOf('month');
            this.events = {};
            this.mentors = [];
            

        this.state = {
            visibleMonth: this.visibleMonth,
            visibleYear: this.visibleYear,
            prevMonth: this.visibleMonth - 1,
            leapYear: this.visibleYear % 4 === 0 ?true :false,
            firstDay: parseInt(this.firstDay.format('E')),
            lastDay:  parseInt(this.lastDay.format('E')),
            events: {},
        }
    }

    componentDidMount(){
        fetch('http://128.199.53.150/events')
            .then((response) => response.json())
            .then((events) => {
                events.map((el) => {
                    if(this.events[el.start.substr(0, 10)]){
                        this.events[el.start.substr(0, 10)].push(el);
                    } else {
                        this.events[el.start.substr(0, 10)] = [el];
                    }
                })
            this.setState({events: this.events});
            console.log(this.state.events);
        })
    }

    componentDidUpdate(){
        //Month.setStatus here!
        
        AppManager.visibleMonths.map((el) =>{
            var events = {};
            for(var key in this.state.events){
                if(new Date(moment(key).format('')).getFullYear() === el.props.year &&
                new Date(moment(key).format('')).getMonth() === el.props.month){
                        events[key] = this.state.events[key];
                }
            }
            el.setState({
                events: events,
            });
        });
    }

    isLeapYear(year){
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
            AppSettings.daysInMonth[1] = 29;
            return true;
        } else { 
            AppSettings.daysInMonth[1] = 28;
            return false;
        }
    }

    render(){
        return (
            <div className = 'calendar'>
                <Header />
                <div>
                    <WeekDays />
                    <Month 
                        className = {'prev-month'} 
                        firstVisibleDate = {AppSettings.daysInMonth[this.state.prevMonth] - (this.state.firstDay - 1) + 1} 
                        lastVisibleDate = {AppSettings.daysInMonth[this.state.prevMonth]} 
                        year = {this.state.visibleMonth === 0 ?this.state.visibleYear - 1 :this.state.visibleYear}
                        month = {this.state.visibleMonth === 0 ?11 :this.state.visibleMonth - 1}
                    />
                    <Month 
                            className = 'current-month'
                            isCurrentMonth = {this.state.visibleYear === AppSettings.currentYear && this.state.visibleMonth === AppSettings.currentMonth ?true :false}
                            firstVisibleDate = {1}
                            lastVisibleDate = {AppSettings.daysInMonth[this.state.visibleMonth]}
                            year = {this.state.visibleYear}
                            month = {this.state.visibleMonth}
                    />
                    <Month 
                        className = {this.state.lastDay === 0 ?'none' :'next-month'} 
                        firstVisibleDate = {1} 
                        lastVisibleDate = {7 - this.state.lastDay} 
                        year = {this.state.visibleMonth === 11 ?this.state.visibleYear + 1 :this.state.visibleYear}
                        month = {this.state.visibleMonth === 11 ?0 :this.state.visibleMonth + 1}
                    />
                </div>
            </div>
        )
    }
}
