import React, {Component} from 'react'
import CommentList from './CommentList'

class Article extends Component{
  constructor(props){
    super(props)

    this.state ={
      isOpen: false
    }
  }
  render(){
    const {article} = this.props
    const {isOpen} = this.state
    return(
      <section>
        <h4>{article.title}</h4>
        <button onClick={this.handleToggleOpen}>
          {isOpen ? 'Close text' : 'Open text'}
        </button>
        {this.getBody()}
      </section>
    )
  }
  getBody(){
    const {article} = this.props
    if(!this.state.isOpen) return null
    return(
      <section>
        {article.text}
        <CommentList comments = {article.comments}/>
      </section>
    )
  }
  handleToggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article