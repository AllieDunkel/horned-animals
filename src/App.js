
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {

  //create constructor function
  constructor(props){
    super(props);
    //how do we pass state to another component? through props
    this.state = {
      hornedbeast: '',
      //add modal
      showModal: false,
      selectHornedBeast: ''
    };
  }

  addHornedBeast = () => {
    //everytime a click happens I want to add more hearts
    this.setState({
      hornedbeast: this.state.hornedbeast + '❤️'
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
      selectHornedBeast: name
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <Main
        addHornedBeast={this.addHornedBeast}
        // data={data}
        handleOnShowModal={this.handleOnShowModal}
        />
        <Footer/>

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
           <Modal.Title>{this.state.selectHornedBeast}</Modal.Title>
          </Modal.Header>
        </Modal> 
      </div>
    );
  }
}

export default App;
