import React, {Component} from 'react';
import moment from 'moment';

export default class DayInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: this.props.className,
            date: this.props.date,
            // events: 
        }
    }

    render(){
        return(
            <div className = {this.state.className}>
                {/*<p>{this.state.date}</p>*/}
                day info
            </div>
        )
    }
}