## React Practise 

Using React.createElements to create HTML tags.

The JSX tags can also be replaced with regular calls such as : 

Component name : Hello 

function HelloWorld(){
  return(
    {
      React.createElement('Hello',null)
    }
  )
}


function Hello(){
  return({
    React.createElement('div',{},['Hello']);
  })
}

Assuming that you have supplied the HelloWorld component to ReactDOM.render, you should be able to see a div tag created in the browser

<div> Hello </div>