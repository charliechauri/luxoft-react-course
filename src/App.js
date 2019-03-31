import React, { Component } from 'react';
import GitHubDeveloper from './GitHubDeveloper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      githubUsers: [],
      app: '',
      k: '',
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
    .then(function(response) {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        githubUsers: myJson,
      });
    });
  }

  handleClick() {
    alert('click');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={this.props.style}>
          <h1>{ this.props.name }</h1>
        </header>

        <ul>
          {this.state.githubUsers.map(user => <GitHubDeveloper user={user} handleClick={this.handleClick} />)}
        </ul>
      </div>
    );
  }
}

export default App;
