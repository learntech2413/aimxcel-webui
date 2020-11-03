// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';
import {Environment} from '../configurations/environment';

// Action creators and helpers
import { establishCurrentUser } from '../modules/auth';
import { isServer } from '../store';

import Routes from './routes';

import './app.css';
import LoadingBar from 'react-redux-loading-bar'
class App extends Component {
  componentWillMount() {
    ReactGA.initialize(Environment.GOOGLE_ANALYTICS_ID); //Google Analytics
    if (!isServer) {
      this.props.establishCurrentUser();
    }
  }



  render() {
    return (
      <div id="app">
        {/* <Header
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
        /> */}
        <LoadingBar />
        
       {/*  <CommonMenu allPinCodes_Sites={this.props.allPinCodes_Sites}></CommonMenu> */}
        <div id="content">
          <Routes />
        </div>
        <button id="view-fullscreen" className="fas fa-expand expandframe fullScreenbtn" type="button" >Full Screen</button>
       {/*  <CommonFooter  allPinCodes_Sites={this.props.allPinCodes_Sites}></CommonFooter> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
 // allPinCodes_Sites: state.homePageData.pinCodes_Sites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ establishCurrentUser }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
