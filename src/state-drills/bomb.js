import React from 'react'


class Bomb extends React.Component {
    state = {
        count: 0,
    };

componentDidMount() {
    this.interval = setInterval(() => {
        this.setState({
            count: this.state.count + 1
        })
    }, 1000)
}

componentWillUnmount() {
    clearInterval(this.interval);
}

renderDisplay() {
    const { count } = this.state
if (count % 2 === 0) {
    return 'tick'
} else if (count >= 8) {
    clearInterval(this.interval)
    return 'BOOM!!!!'
} else {
    return 'tock'
    }
}

render() {
    return (
        <div className='bombCount'>
            {this.renderDisplay()}
        </div>
    )
}
}

export default Bomb;