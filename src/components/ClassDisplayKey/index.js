import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       keyCode: null
    }
  }
  // addEventListener au moment du montage du comonent
/*   componentDidMount() {
    document.addEventListener("keyUp", )
  } */
  
  render() {
    // destructuration 
    const { keyCode } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="text-center"> { keyCode }</h1>
        </div>
      </div>
    )
  }
}
