import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  state = {
    isOpen: false
  }
  render(){
    return <OriginalComponent {...this.props} {...this.state} toggleOpenBtn = {this.toggleOpenBtn}/>
  }
  handleToggle = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}