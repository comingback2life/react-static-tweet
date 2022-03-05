import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
return(
  <div className="container">
  <div className="tweet">
    <CreateAvatar/>
    Tweets
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
    React.createElement([
      'div',{className:'name-with-handle'}
    ])
  )
}
}
ReactDOM.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>,
  document.getElementById('root')
);



