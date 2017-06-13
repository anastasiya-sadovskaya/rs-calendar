import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Calendar from './Calendar.jsx';
import EventInfoPanel from './EventInfoPanel.jsx';

export default class App extends Component{
    render(){
        return(
            <div>
                <Calendar />
                <EventInfoPanel />
            </div>
        )
    }
}
