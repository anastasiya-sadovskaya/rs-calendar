import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/App.jsx';

// let events = [];

// $.ajax({
//     url: 'http://128.199.53.150/events',
//     success: (data) => events = data,
// });

// const eventArr = {};

// fetch('http://128.199.53.150/events')
//             .then((response) => response.json())
//             .then((events) => {
//             //     this.setState({
//             //     events : events,
//             // })
//             events.map((el, i) => {
//                 if(eventArr[el.start.substr(0, 10)]){
//                    eventArr[el.start.substr(0, 10)].push(el);
//                 } else {
//                     eventArr[el.start.substr(0, 10)] = [el];
//                 }
//             })
//             // var tmp;
//             // for (var key in events){

//             // }
//             // this.setState({events: this.events});
//             // console.log(this.state.events);
//         })

//         export {eventArr};

ReactDOM.render(<App />, document.getElementById('root'));