import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet({tweet}){ // tweet component accepts a props called tweet.
return(
  <div className="container">
      <div className="tweet">
    {
       React.createElement(CreateAvatar,null) //no props, usually a key is supplied.
    }
    {
      React.createElement('div',{className:'content'},[
       
        React.createElement(NameWithHandle,{key:'handleName'}),
        React.createElement(Message,{key:'message'}),
        React.createElement(CreateButtons,{key:'utilityButtons'})

      ])
    }
    {
  
    }
    </div>
    </div>

)
function CreateAvatar(){
  return(
    React.createElement('img',{src:(require('./harvey.jpeg')),className:'avatar'},null) 
    //image does not return anything() hence null
  )
}
function Message(){
  return(
    React.createElement('div',{className:'message'},[`It's going to happen because I'm going to make it happen..`])
  )
}
function NameWithHandle(){
  return(
    React.createElement(
      'div',{className:'tweet-box'},[
        React.createElement('span',{className:'userName',key:'yourName'},'Harvey Specter'), //each element in React should have a unique key.
        React.createElement('span',{className:'handle', key:'yourHandle'},'@harveyspecter'),
      ]
    )
  )
  
}
function CreateButtons(){
  return(
    React.createElement(
      'div',{className:'utility-buttons'},[
        React.createElement('span',{className:'time',key:'postTime'},'3 hours ago'),
        React.createElement('i',{className:' fa fa-heart like-button',key:'likeButton'},null), //i does not return anything hence null
        React.createElement('i',{className:'fa fa-retweet retweet-button',key:'retweet-button'},null),
        React.createElement('i',{className:'fa fa-reply reply-button',key:'reply-button'},null),
        React.createElement('i',{className:'fa fa-ellipsis more-options',key:'more-button'},null)
      ]
    )
  )
}
}
ReactDOM.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>,
  document.getElementById('root')
);



