import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const greeting = "Hi!, Tom!";
//     const dom = <h1 className="foo">{ greeting }</h1>
//     // return dom;
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log('I am clicked!')}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => (<Counter />)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1 })
  }

  render() {
    console.log('render')
    return (
      <React.Fragment>
        <div>{ this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
