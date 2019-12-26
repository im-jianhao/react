import React, { Component } from 'react'

class Jsx extends Component {
  constructor(){
    super()
    this.state ={
      msg='<b>hello</b>'
    }
  }
  render () {
    return (
      <div>{ this.state.msg }</div>
    )
  }
}

export default Jsx