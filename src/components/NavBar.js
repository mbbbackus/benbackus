import React, { Component } from "react";
import { tabNames } from "../variables";
import Button from 'react-bootstrap/Button';

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.renderNavs = this.renderNavs.bind(this);
  }
  renderNavs () {
    return tabNames.map((name, i) => 
      <li className="nav" key={"nav" + i}>
        <Button 
          onClick={this.props.switchTab} 
          value={i} 
          className={this.props.currentTab === name && "selected-tab"}
        >
          {name}
        </Button>
      </li>
    );
  }
  render () {
    return (
      <div className="navbar">
        <ul>
          {this.renderNavs()}
        </ul>
      </div>
    );
  }
}

export default NavBar;
