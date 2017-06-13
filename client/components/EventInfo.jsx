import React, {Component} from 'react';
import moment from 'moment';
// import Comments from './Comments.jsx';
import AppManager from './AppManager';

export default class EventInfo extends Component{
    constructor(props){
        super(props);
        AppManager.infoPanel.EventInfo = this;
        this.state = {
            className: this.props.className,
            date: this.props.date,
            speakers: [],
        }
    }

    // componentDidUpdate(){
    //     AppManager.infoPanel.EventInfo.comments.setState({
    //          date : this.props.date.format(),
    //     })
    // }

    render(){
        var ev = this.props.event;
        var speakers = this.state.speakers.map((el, i) => {
                    return(
                        <div key = {i} className = 'speaker' >
                        <img className = 'avatar' src = {el.avatar}/>
                        <p>{el.name}</p>
                        </div>
                    )
                
                })
        return(
            <div className = {this.state.className}>
                <p>Type: {ev.type}</p>
                <p>Title: {ev.title}</p>
                <p>Start: {moment(ev.start).format('LT')}</p>
                <p>End: {moment(ev.start).add(ev.duration, 'millisecond').format('LLL')}</p>
                <p>Duration: ~{Math.ceil(ev.duration/3600000)} hours</p>
                <p>Description: {ev.description}</p>
                <div className = 'speakers'>{speakers}</div>
                {/*<Comments comments = {ev.comments} date = {this.state.date.format().substr(0,10)}/>*/}
            </div>
        )
    }
}
