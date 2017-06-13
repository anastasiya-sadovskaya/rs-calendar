import React, {Component} from 'react';
import AppManager from './AppManager';

export default class Comments extends Component{

    constructor(props){
        super(props);
        AppManager.infoPanel.EventInfo.comments = this;
        this.comments = [];
        this.state = {
            name: '',
            message: '',
            comments: this.props.comments,
            date : this.props.date,
            id: '',
        }
    }

    nameChange(ev){
        var value = ev.target.value;
        this.setState({
            name: value,
        })
    }

    messageChange(ev){
        var value = ev.target.value;
        this.setState({
            message: value,
            
        })
    }

    addComment(){
        this.comments.push({
            
        })
        // this.comments.push({
        //     name: this.state.name,
        //     message : this.state.message,
        // });
        // AppManager.calendar.setState({
        //     comments: this.comments,
        // })
    }

    render(){
        return(
            <div>
                Name: <input type = 'text' value = {this.state.name} onChange = {this.nameChange}/>
                Message: <textarea value = {this.state.message} onChange = {this.messageChange}/>
                <button onClick = {this.addComment.bind(this)}>Send</button>
            </div>
        )
    }
}