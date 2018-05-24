import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpenBtn from '../decorators/toggleOpenBtn'

class CommentList extends Component{
  static defaultProps = {
    comments: []
  }
  render(){
    const text = this.props.isOpen ? 'Hide comments' : 'Show comments'
    return(
      <div>
        <button onClick = {this.props.handleToggle}>
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody(){
    const {comments, isOpen} = this.props
    if(!isOpen) return null
    if(!comments.length) return <p>No comments yet</p>

    return(
      <ul>
        {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
      </ul>
    )
  }
}
export default toggleOpenBtn(CommentList)