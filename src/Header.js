import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {
    console.log(this.props.hornedAnimals)
    return (
      <header>
        <h1>Horned Animals</h1>
      </header>
    );
}
}

export default Header;