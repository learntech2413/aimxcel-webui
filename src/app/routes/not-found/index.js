import React, { Component } from 'react';
import Page from '../../components/page';
import {Redirect} from 'react-router-dom';
import ReactGA from 'react-ga';
import { removeCurrentProfile } from '../../../modules/profile';
class NotFound extends Component {
  constructor(){
    super();
    this.state ={
      isPageLoaded: false,
      hasUIError: false
    }
  }
  componentDidCatch(error, info) {
    console.log('error in not-found');
    removeCurrentProfile();
    this.setState({ hasUIError: true });
  }


  render() {
    if(this.state.hasUIError)
    {
      console.log('page not found')
      return <Redirect to='/logout' />
    }
    return <Redirect to='/logout' />
  }
}


export default NotFound;
