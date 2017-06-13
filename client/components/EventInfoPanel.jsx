import React, {Component} from 'react';
import moment from 'moment';
import AppSettings from './AppSettings';
import AppManager from './AppManager';
// import DayInfo from './DayInfo.jsx';
import EventInfo from './EventInfo.jsx';



export default class EventInfoPanel extends Component{

constructor(props){
    super(props);
    AppManager.infoPanel = this;
    this.state = {
        date: moment(),
        events: null,
        className : 'none',
        // showDayInfo: true,
        // showEventInfo: false,
    }
}

componentDidUpdate(){
    //AppManager.infoPanel.EventInfo

    let speakers = [];
        AppManager.infoPanel.EventInfo.props.event.speakers.map((el) => {
            fetch('http://128.199.53.150/trainers/' + el)
                .then((response) => response.json())
                .then((response) => {
                    speakers.push(response);
                AppManager.infoPanel.EventInfo.setState({speakers: speakers});
            })
        })
}

closeInfoPanel(){
    this.setState({
        className : 'none',
    })
}

render(){
    return(
        <div className = {this.state.className}>
            <div className = 'close' onClick = {this.closeInfoPanel.bind(this)}>+</div>
            <p>Date: {this.state.date.format('LL')}</p>
            {this.state.events ?<EventInfo className = 'event-info' event = {this.state.events} date = {this.state.date}/> :null}
            
        </div>
    )
}

}
