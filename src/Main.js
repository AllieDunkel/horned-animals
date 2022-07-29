import React from 'react';
import HornedAnimal from './HornedAnimal.js'
// import data from './Data.json'
import './HornedAnimal.css';
import './Main.css';
// import Button from 'react-bootstrap/Button';
import { Container, Row} from 'react-bootstrap';
import FindAnimal from './FindAnimal.js';



class Main extends React.Component {

  render() {
    console.log(this.props.data)
    //get data out
    let hornedAnimals = this.props.data.map((newHornedAnimal,index) => {
     

      return <HornedAnimal
      title={newHornedAnimal.title}
      key={index}
      image_url={newHornedAnimal.image_url}
      addHornedAnimal={this.props.addHornedAnimal}
      handleOnShowModal={this.props.handleOnShowModal}
      />
    });



    // let findAnimals = this.props.FindAnimal.map((newFindAnimal, index) =>{
    //   return <FindAnimal


    // });
    // data.forEach((newHornedAnimal, index) => {
    //   hornedAnimal.push(<HornedAnimal title={newHornedAnimal.title} image_url={newHornedAnimal.image_url} description={newHornedAnimal.description} key={index}  /> );
    // });

    return(

    <main> 
      
        <Container>
        <Row lg={4} md={3} sm={2} xs={1}>
          {hornedAnimals}
        </Row>
        <Row>
          {FindAnimal}
        </Row>
        </Container>
      </main>
    );
  }
}

export default Main;


