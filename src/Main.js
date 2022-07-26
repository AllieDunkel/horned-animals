import React from 'react';
import HornedBeast from './HornedBeast.js'
import data from './Data.json'
import './HornedBeast.css';
import './Main.css';


class Main extends React.Component {
  render() {
    //get data out
    let hornedBeasts = [];
    data.forEach((newHornedBeast, index) => {
      hornedBeasts.push(<HornedBeast title={newHornedBeast.title} image_url={newHornedBeast.image_url} description={newHornedBeast.description} key={index}  /> );
    });


  
    return (
      <main>
       {hornedBeasts}
      </main>
    )
  }
}

export default Main;


