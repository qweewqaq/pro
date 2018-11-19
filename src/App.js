import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "antd-mobile"
import {add,decrease} from "./redux/action/counter"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

const mapStatetoProps=(state)=>{
    return {
        num:state
    }
}
const actionCreaters={aaaaaaaaaaaaa
    add,
    decrease
}
@connect(mapStatetoProps,actionCreaters)
class App extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

          <Button type="primary" onClick={this.props.add}>a</Button>
          <Button type="primary" onClick={this.props.decrease}>d</Button>
      </div>
    );
  }
}

export default withRouter(App);
