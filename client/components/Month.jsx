import React, {Component} from 'react';
// import moment from 'moment';
// import AppSettings from './AppSettings';
import AppManager from './AppManager';
import Day from './Day.jsx';

export default class Month extends Component{
    constructor(props){
        super(props);
        AppManager.visibleMonths.push(this);
        this.state = {
            events : {},
        }
    }

    componentDidUpdate(){
        // Days set status here!


    }

    componentWillUpdate(){
        // var events = {};
        // for(var key in AppManager.calendar.state.events){
        //     if(new Date(moment(key).format('')).getFullYear() === this.props.year &&
        //        new Date(moment(key).format('')).getMonth() === this.props.month){
        //             events[key] = AppManager.calendar.state.events[key];
        //             console.log('g');
        //        }
        // }

        // this.setState({
        //     events: events,
        // })
    }

    // openInfoPanel(){
    //     AppManager.infoPanel.setState({className: 'info-panel'});
    // }
    // componentDidMount(){
    //     console.log(this, 'componentDidMount' );
    // }

    // componentDidUpdate(){
    //     console.log(this, 'componentDidUpdate' );
    // }

    render(){
        let year = this.props.year;
        let month = this.props.month;
        let days = [];
        for (let i = this.props.firstVisibleDate; i <= this.props.lastVisibleDate; i += 1){
            days.push(i);
        }
        var dayTemplate = days.map( (el, i) => {
            return (
                <Day 
                    date = {i + this.props.firstVisibleDate} 
                    key = {i} 
                    isCurrentMonth = {this.props.isCurrentMonth}
                    year = {year}
                    month = {month}
                    value = {new Date(year, month,i + this.props.firstVisibleDate,20,0,0 ).toISOString().substr(0,10)}
                    events = {this.state.events[new Date(year, month,i + this.props.firstVisibleDate,20,0,0 ).toISOString().substr(0,10)]}
                    // onCellClick = {this.openInfoPanel}
                    
                />

            )
        })
        return (
            <div className = {this.props.className}>{ dayTemplate }</div>
        )
    }
}

