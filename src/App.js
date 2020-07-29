import React, { Component } from "react";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CodePage from './components/CodePage';
import ArtPage from './components/ArtPage';
import WritingPage from './components/WritingPage';
import { tabNames } from "./variables";
import './mysite.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: "Home"
    }
    this.switchTab = this.switchTab.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }
  switchTab (event) {
    let tabIndex = event.target.value;
    if (tabIndex >= 0 && tabIndex <= 3) {
      this.setState({currentTab: tabNames[tabIndex]});
    }
  }
  renderPage () {
    switch (this.state.currentTab) {
      case "Code":
        return <CodePage/>;
      case "Art":
        return <ArtPage/>;
      case "Writing":
        return <WritingPage/>;
      default:
        return <HomePage/>;
    }
  }
  render () {
    return (
      <div className="App">
        <NavBar currentTab={this.state.currentTab} switchTab={this.switchTab}/>
        <div className="page-content">
          {this.renderPage()}
        </div>
      </div>
    );
  } 
}

export default App;
