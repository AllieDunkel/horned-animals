/* <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description. */


import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img>{this.props.imageUrl}</img>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;