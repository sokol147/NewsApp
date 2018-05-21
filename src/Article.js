import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component{
  constructor(props){
    super(props)

    this.state = {
      isOpen: false
    }
  }
  render(){
    const {article} = this.props
    const {isOpen} = this.state

    return(
      <div>
        <h2>{article.title}</h2>
        <button onClick={this.handleToggleNews}>
          {isOpen ? 'Close text' : 'Open text'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody(){
    if(!this.state.isOpen) return null
    const {article} = this.props
    return(
      <div>
        {article.text}
        <CommentList comments = {article.comments}/>
      </div>
    )
  }
  handleToggleNews = () =>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}








// // functional components
// export default function Article(props){
//   const {article} = props;
//   return(
//     <div>
//       <h1>{article.title}</h1>
//       <section>{article.text}</section>
//     </div>
//   )
// }