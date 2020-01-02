import React from 'react';

class RouletteGun extends React.Component{
  static defaultProps = {
    bulletInTheChamber : 8,
  };
  

  state = {
    chamber: null,
    spinningTheChamber: false,
  };
  

  handleClick = () => {
    this.setState({
      spinningTheChamber : true
    })

    this.timeout = setTimeout(() => {
      let randomChamber = Math.ceil(Math.random() * 8)

    this.setState({
      chamber: randomChamber,
      spinningTheChamber: false,
    })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  renderDisplay() {
    const {chamber, spinningTheChamber } = this.state
    const { bulletInTheChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInTheChamber) {
      return 'BANG!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render(){
    return (
      <div className='RouletteGun'>
          <p>{this.renderDisplay()}</p>
          <button onClick={this.handleClick}>
            Pull the trigger!
          </button>
      </div>
    )
  }
}

export default RouletteGun;