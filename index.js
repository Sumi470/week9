import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FacebookEmojiCounter from './Facebookemoji';

ReactDOM.render(

 <React.Fragment>
 <FacebookEmojiCounter type= "Like"/>
 < FacebookEmojiCounter type= "Love"/>
 < FacebookEmojiCounter type= "happy"/>
 </React.Fragment>,
 document.getElementById('root'));
// If you want your app to work offline and load

// unregister() to register() below. Note this co

// Learn more about service workers: https://bit.

