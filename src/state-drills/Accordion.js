import React from 'react';

class Accordion extends React.Component {
  static defaultProps = {
    sections : []
  };

  state = {
    activeSection : null,
  }

  handleClick = (sectionIndex) => {
    this.setState({activeSection : sectionIndex})
  }

  renderItem(section, idx, activeSection){
    return(
      <li>
        <button onClick={this.handleClick()}>{}</button>
      </li>
    )
  }

  render(){
    const {activeSection} = this.state
    const {sections} = this.props
    return (
      <ul className='Accordion'>
       {sections.map((section, idx) =>
        this.renderItem(section, idx, activeSection)
        )}
      </ul>
    )
  }
}

export default Accordion;