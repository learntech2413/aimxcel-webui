import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../components/authenticated-route';
import UnauthenticatedRoute from '../components/unauthenticated-route';
import Loadable from 'react-loadable';

import NotFound from './not-found';
//import Lessions from './lessions';


const LoginPage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './login'),
  loading: () => null,
  modules: ['login']
});

const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ './dashboard'),
  loading: () => null,
  modules: ['dashboard']
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ './login'),
  loading: () => null,
  modules: ['login']
});

const Logout = Loadable({
  loader: () => import(/* webpackChunkName: "logout" */ './logout'),
  loading: () => null,
  modules: ['logout']
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */ './profile'),
  loading: () => null,
  modules: ['profile']
});

const Lessions = Loadable({
  loader: () => import(/* webpackChunkName: "lessions" */ './lessions'),
  loading: () => null,
  modules: ['lessions']
});

const Concepts = Loadable({
  loader: () => import(/* webpackChunkName: "concepts" */ './concepts'),
  loading: () => null,
  modules: ['concepts']
});

export default () => (
  <Switch>    
    <Route exact path="/" component={LoginPage} />
    
    <Route exact path="/profile/:id" component={Profile} />
    <Route exact path="/subject/:id/:subject" component={Lessions} />

    <Route exact path="/concept/:id/:subject/:lession" component={Concepts} />

    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />

    <UnauthenticatedRoute exact path="/login" component={LoginPage} />
    <AuthenticatedRoute exact path="/logout" component={Logout} />

   

    <Route component={NotFound} />
  </Switch>
);
