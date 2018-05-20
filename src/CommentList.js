import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component{
  state = {
    isOpen: false
  }
  render(){
    const text = this.state.isOpen ? 'Hide comments' : 'Show comments'
    return(
      <div>
        <button onClick = {this.handleToggleComment}>
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody(){
    if(!this.state.isOpen) return null

    const {comments} = this.props
    if(!comments || !comments.length) return <p>No comments yet</p>

    return(
      <ul>
        {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
      </ul>
    )
  }
  handleToggleComment = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}