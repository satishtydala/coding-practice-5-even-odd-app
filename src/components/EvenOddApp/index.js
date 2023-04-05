// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({
      count: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state

    let evenOrOdd
    if (count % 2 === 0) {
      evenOrOdd = 'Even'
    } else {
      evenOrOdd = 'Odd'
    }

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {evenOrOdd}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increased by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
