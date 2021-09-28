import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
import {robots} from './robots';
import Card from './Card';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Hello greetings={"Binayak"} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Card name={robots[0].name} username={robots[0].username} id={robots[0].id}/>
    <Card name={robots[1].name} username={robots[1].username} id={robots[1].id}/>
    <Card name={robots[2].name} username={robots[2].username} id={robots[2].id}/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
