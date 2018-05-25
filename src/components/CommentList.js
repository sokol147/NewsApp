import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
  }
  render(){

    const {isOpen} = this.state
    return(
      <div>
        <button onClick={this.handleToggleOpen}>
          {isOpen ? 'Open comments' : 'Close comments'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody(){
    const {comments} = this.props
    if(!this.state.isOpen) return null
    if(!comments || !comments.length) return <p>No comments yet</p>
    const commentElements = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
    return(
      <ul>
        {commentElements}
      </ul>
    )
  }
  handleToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default CommentList