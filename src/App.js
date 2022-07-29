
import React from 'react';
// import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import Modal from 'react-bootstrap/Modal';
import data from './Data.json';

class App extends React.Component {

  //create constructor function
  constructor(props){
    super(props);
    //how do we pass state to another component? through props
    this.state = {
      hornedAnimal: '',
      //add modal
      showModal: false,
      selectHornedAnimal: ''
    };
  }

  addHornedAnimal = () => {
    //everytime a click happens I want to add more hearts
    this.setState({
      hornedAnimal: this.state.hornedAnimal + '❤️'
    });
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }

  handleOnShowModal = (name) => {
    this.setState({
      showModal: true,
      selectHornedAnimal: name
    })
  }

  render() {
    console.log('we got data' ,data);
    return (
      <>
        <Main
        addHornedAnimal={this.addHornedAnimal}
        // data={data}
        handleOnShowModal={this.handleOnShowModal}
        />
        <Footer/>

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
           <Modal.Title>{this.state.selectHornedAnimal}</Modal.Title>
          </Modal.Header>
        </Modal> 
      </>
    );
  }
}

export default App;
