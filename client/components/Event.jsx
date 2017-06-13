import React, {Component} from 'react';
import AppSettings from './AppSettings';
import AppManager from './AppManager';
import moment from 'moment';
import EventInfoPanel from './EventInfoPanel.jsx';


export default class Event extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.event.type.substr(0, 1),
            event: null,
        }
    }

    openEventInfo(){
        AppManager.infoPanel.setState({
            className: 'info-panel',
            date: moment(this.props.value), 
            events: this.props.event,
            // showEventInfo: true,
            // showDayInfo: false,
        });
        console.log('event');
    }
    

    //     renderEvent(ev){
    //     switch(ev){
    //         case 'webinar' : return 'W' ;
    //         case 'event' : return 'E';
    //         case 'deadline' : return 'D';
    //         case 'lecture' : return 'L';
    //         case 'workshop' : return 'W';
    //         default : return ;
    //     }
    // }

    getFullEventName(){
        this.setState({
            name: this.props.event.type,
        })
    }

    getShortEventName(){
        this.setState({
            name:  this.props.event.type.substr(0, 1),
        })
    }

    // componentDidUpdate(){
    //     this.setState({
    //         event: this.props.event,
    //     })
    // }

    
        render(){
            return(
                <div onClick = {this.openEventInfo.bind(this)}
                    className = {'event ' + this.props.class} 
                    onMouseOver = {this.getFullEventName.bind(this)} 
                    onMouseOut = {this.getShortEventName.bind(this)}
                >
                  
                    {this.state.name}
                    
                </div>
            )
        }
}