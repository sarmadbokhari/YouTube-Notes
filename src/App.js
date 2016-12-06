import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'the state text here'
    }
  }
  update(e) {
    this.setState({text: e.target.value})
  }
  render() {
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

export default App
