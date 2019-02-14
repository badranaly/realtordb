import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authenticateUser } from './services/loginService';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      authenticated: false,
      redirectUser: false
    }
  }

  onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    authenticateUser(username, password).then((res) => {
      console.log(res)
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={this.onSubmit}>
          <label style={{fontSize: '15px', marginRight: '-10px'}}>
              <div style={{marginBottom: '2px'}}>Username</div>
              <input type="text" name="username" style={{marginRight: '15px'}} onChange={this.onInputChange}/>
          </label>
          <label style={{fontSize: '15px', marginRight: '-7px'}}>
              <div style={{marginBottom: '2px', marginTop: '5px'}}>Password: </div>
              <input type="password" name="password" style={{marginRight: '10px'}} onChange={this.onInputChange}/>
          </label>
          <div>
              <input type="submit" value="Submit"/>
          </div>
        </form>
        </header>
      </div>
    );
  }
}

export default App;
