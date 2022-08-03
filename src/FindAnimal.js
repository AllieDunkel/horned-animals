import React from "react";
import { ListGroup, ListGroupItem, Form } from "react-bootstrap";
import data from "./Data.json";

class FindAnimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: "",
      howtoSort: "selected",
      data: data, //need to specify getting it from the data
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let selected = event.target.selected.value;

    //add to state

    this.setState({
      howtoSort: selected,
    });
  };

  handleInput = (event) => {
    let selected = event.target.value;
    if (selected === "1") {
      let newHorns = data.filter((numOfHorns) => numOfHorns === 1);
      this.setState({ StoredData: newHorns });
    } else if (selected === "2") {
      let newHorns = data.filter((numOfHorns) => numOfHorns === 2);
      this.setState({ StoredData: newHorns });
    } else if (selected === "3") {
      let newHorns = data.filter((numOfHorns) => numOfHorns === 3);
      this.setState({ StoredData: newHorns });
    } else if (selected === "100") {
      let newHorns = data.filter((numOfHorns) => numOfHorns === 100);
      this.setState({ StoredData: newHorns });
    } else {
      this.setState({ StoredData: data });
    }
  };

  render() {
    let numOfHorns = this.state.data.map((numOfHorns, index) => {
      return (
        <ListGroupItem key={index}>
          {numOfHorns} - {this.state.data[index]}
        </ListGroupItem>
      );
    });
    console.log('xxx', numOfHorns);
    return (
      <>
        <section className="pickAHorned Animal">
          <h4>Choose the Number of Horns you want to see!</h4>
          <ListGroupItem>{numOfHorns}</ListGroupItem>
        </section>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <p>Horn selecter</p>

            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>

          <button type="submit">Submit</button>
        </Form>
      </>
    );
  }
}

export default FindAnimal;
