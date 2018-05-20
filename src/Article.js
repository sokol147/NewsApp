import React, {Component} from 'react'
import CommentList from './CommentList'


export default class Article extends Component{
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
      <article>
        <h1>{article.title}</h1>
        <button onClick={this.handleToggleOpen}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </article>
    )
  }

  getBody(){
    if(!this.state.isOpen) return null
    const {article} = this.props
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