import React from 'react';
import { PureCompo } from './PureCompo';
import "../App.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, Bhanu!',
      change : true,
    };
  }

//   updateMessage = () => {
//     this.setState({ message: 'Updated Message: Hello BhanuMitra!' });
//   }

changeMessage = () => {
    const newMessage = this.state.change
      ? 'Updated Message: Hello BhanuMitra!'
      : 'Hello, Bhanu!';
      
    this.setState((prevState) => ({
      message: newMessage,
      change: !prevState.change,
    }));
  }

  render() {
    return (
        <div>
            <dl>
                <dt><b>what is pure component ?</b></dt>
                <dd>A PureComponent in React is a class component that 
                    comes with a built-in optimization for rendering. 
                    It is designed to prevent unnecessary renders by 
                    automatically implementing the shouldComponentUpdate 
                    method with a shallow prop and state comparison. 
                    This means that a PureComponent will only re-render if 
                    its props or state have changed compared to the 
                    previous render.</dd>
            </dl>
      <div className='background'>
        <h1>Pure Component</h1>
        <PureCompo message={this.state.message} />
        <button onClick={this.changeMessage} className='button'>Update Message</button>
      </div>
      </div>
    );
  }
}

export default Message;
