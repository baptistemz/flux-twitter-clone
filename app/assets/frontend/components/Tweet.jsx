import React from 'react'

export default class Tweet extends React.Component {
  render(){
    return(
      <li className="collection-item avatar">
        <img src={this.props.gravatar} className="material-icons circle"/>
        <span className="title">{this.props.author_name}</span>
        <time>{this.props.formattedDate}</time>
        <p> {this.props.body}</p>
      </li>
    )
  }
}
