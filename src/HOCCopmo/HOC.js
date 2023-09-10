import React from 'react'
import "../App.css"
const HOC = (props) => {
  return (
    <>
            <dl>
                <dt><b>what is Higher Order Component (HOC)?</b></dt>
                <dd>A Higher Order Component (HOC) in React is a design pattern that allows
                    you to enhance or extend the functionality of a component by wrapping it 
                    with another component. It is a function that takes a component and returns 
                    a new component with additional props, behavior, or modifications.
                    The primary purpose of HOCs is to provide a way to reuse component logic 
                    across different parts of your application and to keep your components 
                    focused on their specific responsibilities.</dd>
            </dl>
          <h2 className='box box1'>{<props.value newdata={'Data from Blue Compo'} />}</h2>
          <h2 className='box box2'>{<props.value newdata={'Data from Cornflowerblue Compo'} />}</h2>
          
    </>
  )
}

export default HOC

