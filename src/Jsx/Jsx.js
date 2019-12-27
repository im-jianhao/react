import React, { Component } from './node_modules/react'

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