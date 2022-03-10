import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var userTweet={
  message : "It's going to happen because I'm going to make it happen..",
  image : "./harvey.jpeg",
  author:{
    handle:'harveyspecter',
    authorName : 'Harvey Specter'
  },
  likes:2,
  reTweets:30,
  postTime:'2020-04-10 1:45pm'
};
function Tweet({tweet}){ // tweet component accepts a props called tweet.
return(
  <div className="container">
      <div className="tweet">
    {
       React.createElement(CreateAvatar,{image:`${userTweet.image}`}) //no props, usually a key is supplied.
    }
    {
      React.createElement('div',{className:'content'},[
        React.createElement(NameWithHandle,{key:'handleName',details:{authorName:`${userTweet.author.authorName}`,handle:`${userTweet.author.handle}`}}),
        React.createElement(Message,{key:'message',message:`${userTweet.message}`}),
        React.createElement(CreateButtons,{key:'utilityButtons',postEngagement:{likes:`${userTweet.likes}`,reTweets:`${userTweet.reTweets}`,time:`${userTweet.postTime}`}})

      ])
    }
    {
  
    }
    </div>
    </div>

)
function CreateAvatar({image}){
  return(
    React.createElement('img',{src:(require(`${image}`)),className:'avatar'},null) 
    //image does not return anything() hence null
  )
}
function Message({message}){ //props are passed as an object hence, destructuring it in the function argument itself.
  return(
    React.createElement('div',{className:'message'},[`${message}`]) 
  )
}
function NameWithHandle(args){ //props can also be accepted in object form and destructured inside the function
  return(
    React.createElement(
      'div',{className:'tweet-box'},[
        React.createElement('span',{className:'userName',key:'yourName'},[`${args.details.authorName}`]),  //authorName has been destructered from args which is passed an object containing details which is also an object
        //each element in React should have a unique key.
        React.createElement('span',{className:'handle', key:'yourHandle'},[` @${args.details.handle}`]),
      ]
    )
  )
  
}
function CreateButtons({postEngagement}){ //destructuring postEngagement passed as an object  to this
  return(
    React.createElement(
      'div',{className:'utility-buttons'},[
        React.createElement('span',{className:'time',key:'postTime'},`${postEngagement.time}`), //you can pass it as a plain string as well.
        React.createElement('span',{className:'likeCount',key:'countLikes'},[`${postEngagement.likes}`,[
          React.createElement('i',{className:' fa fa-heart like-button',key:'likeButton'},null)
          ]]), //creating a element inside  within the span called likeCount with both likes and the heart symbol
          React.createElement('span',{className:'likeCount',key:'countLikes'},[`${postEngagement.reTweets}`,[
            React.createElement('i',{className:'fa fa-retweet retweet-button',key:'retweet-button'},null)
          ]]),
          /*
           React.createElement('i',{className:'fa fa-retweet retweet-button',key:'retweet-button'},null), //if i does not return anything null , if it has a children pass it 
          */
       
        React.createElement('i',{className:'fa fa-reply reply-button',key:'reply-button'},[null]),
        React.createElement('i',{className:'fa fa-ellipsis more-options',key:'more-button'},null)
      ]
    )
  )
}
}


ReactDOM.render(
  <React.StrictMode>
    <Tweet tweet={userTweet} />
  </React.StrictMode>,
  document.getElementById('root')
);



