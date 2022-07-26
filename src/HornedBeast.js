import React from 'react';
import './HornedBeast.css';
import './Main.css';


class HornedBeast extends React.Component {

constructor (props){
  super(props);
  this.state= {
    likes:0
   
  };
};

handleLikes=() => {
  this.setState({
    likes:this.state.likes + 1
  })
}

  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.state.likes} Likes</p>
         <img src="http://clipart-library.com/free-heart-images.html" alt="heart icon" width="100" height="100"></img>
        <img onClick={this.handleLikes} src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;