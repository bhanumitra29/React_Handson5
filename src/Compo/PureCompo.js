import React, { PureComponent } from 'react'

export class PureCompo extends PureComponent {
  render() {
    console.log('Rendered PureCompo');
    return (
      <div>
        <h1>PureCompo</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
}




export default PureCompo;