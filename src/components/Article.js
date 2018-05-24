import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpenBtn from '../decorators/toggleOpenBtn'

class Article extends Component{
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  }
  render(){
    const {article, isOpen, handleToggle} = this.props

    return(
      <div>
        <h2>{article.title}</h2>
        <button onClick={handleToggle}>
          {isOpen ? 'Close text' : 'Open text'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody(){
    const {article, isOpen} = this.props
    if(!isOpen) return null
    return(
      <div>
        {article.text}
        <CommentList comments = {article.comments}/>
      </div>
    )
  }
}

export default toggleOpenBtn(Article)
