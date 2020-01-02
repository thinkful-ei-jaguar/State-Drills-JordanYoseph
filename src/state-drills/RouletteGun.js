import React from 'react';

class RouletteGun extends React.Component{
  static defaultProps = {
    bulletInTheChamber : 8,
  }

  state = {
    chamber: null,
    spinningTheChamber: false,
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber : true
    })
    let timeout = setTimeout()
  }

  render(){
    return (
      <div>
          <button>Pull the trigger!</button>
          {<p>spinning the chamber and pulling the trigger! ...</p>}
          {<p>you're safe!</p>}
          {<p>BANG!!!</p>}

      </div>
    )
  }
}

export default RouletteGun;