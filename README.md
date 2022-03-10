## React Practise 
 This is the dynamic version of our static tweet application. 
No user input is taken instead a user input is assumed by making an object called userTweet.
 It demonstrates the use of props. 
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

## Constraints

I have refrained to use a lot of nesting hence I have written tags the regular way instead with React.createElement :100: