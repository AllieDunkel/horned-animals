import React from 'react';
import HornedBeast from './HornedBeast.js'

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast title="cows" imageUrl="public/cow.jpg" description="Cattle tend to be stocky with long, rectangular bodies. Beef cattle are more muscular; dairy cattle have a truer rectangular shape. Zebu cattle (Bos indicus) are called humped cattle; each specimen has a hump over its shoulders. The head is small relative to body size; it has a long, straight snout."/>
        <HornedBeast title="sheep" imageUrl="public/sheep.jpg" description="Sheep, (Ovis aries), species of domesticated ruminant (cud-chewing) mammal, raised for its meat, milk, and wool. The sheep is usually stockier than its relative the goat (genus Capra); its horns, when present, are more divergent; it has scent glands in its face and hind feet; and the males lack the beards of goats."/>
      </main>
    )
  }
}

export default Main;


