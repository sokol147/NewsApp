import React, {Component} from 'react'

export default class Article extends Component{
  constructor(props){
    super(props)

    this.state = {
      isOpen: false,
    }
  }
  render(){
    const {article} = this.props
    const {isOpen} = this.state
    return(
      <div>
        <h1>{article.title}</h1>
        <button onClick={this.handleToggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    if(!this.state.isOpen) return null
    const {article} = this.props
    return <section>{article.text}</section>
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