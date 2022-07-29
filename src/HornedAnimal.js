import React from 'react';
import './HornedAnimal.css';
import './Main.css';
import { Card, Button, Col } from 'react-bootstrap';


class HornedAnimal extends React.Component {

constructor (props){
  super(props);
  this.state= {
    likes:0
  };
}

handleLikes=() => {
  console.log('we here!');
  this.setState({
    likes: this.state.likes + 1,
  });
}

helperFunctionPicClick = () => {
  this.props.handleShowModal(this.props.article)
};

  render() {
    return (
    
    <>
      <Col className="mt-4">
        <Card className="h-100 p-3">
          <Card.Title onClick={this.helperFunctionPicClick} >{this.props.hornedAnimal}</Card.Title>
          <Card.Img
            src={this.props.image_url}
              alt={this.props.title}
              onClick={this.props.addHornedAnimals}
        />

        <article>
        <h2>{this.props.title}</h2>
        <p>{this.state.likes} ❤️ Likes </p>
        <img onClick={this.handleLikes} src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
        <p>{this.props.description}</p>
      </article>
     </Card>
    </Col>
    </>
  
    )
  }
}

export default HornedAnimal;