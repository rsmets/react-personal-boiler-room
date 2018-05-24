import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent.js'
import logo from './logo.svg';
import './App.css';
import Listing from './Listing.js';
import './styling.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount() {
    //debugger;
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    return (
      <div className="App">
        {/* <Listing/> */}
        <Sidebar 
          // sidebar={<Listing/>}
          sidebar={<SidebarContent/>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}>
          <b>Main content</b>
        </Sidebar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a generic landing page</h1>
        </header>
        <p className="App-intro">
          More coming soon... hopefully.
        </p>
      </div>
    );
  }
}

export default App;
