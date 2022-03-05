import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
return(
  <div className="container">
      <div className="tweet">
    {
      React.createElement(CreateAvatar,null) //no props
    }
    {
      React.createElement('div',{className:'content'},[
        React.createElement(NameWithHandle,{className:'name-with-handle',key:'handleName'}),
        React.createElement(Message,{key:'message'})

      ])
    }
    </div>
    </div>

)
function CreateAvatar(){
  return(
    React.createElement('img',{src:'https://gravatar.com/avatar',className:'avatar'},null) 
    //image does not return anything hence null
  )
}
function Message(){
  return(
    React.createElement('div',{className:'message'},['This should be less than 140 characters'])
  )
}
function NameWithHandle(){
  return(
    React.createElement(
      'span',{},[
        React.createElement('span',{className:'userName',key:'yourName'},'Your Name'),
        React.createElement('span',{className:'handle', key:'yourHandle'},'@yourHandle'),
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



