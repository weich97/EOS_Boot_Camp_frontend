import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
import AboutUs from './AboutUs';
import Dashboard from './dashboard';
import SocialApps from './socialApps';
import Carpool from './carpool';
import AboutTest from './AboutUs/AboutTest';

const Routes = ({match}) =>
  <Switch>
    <Route path={`${match.url}/dashboard`} component = {Dashboard} />
    <Route path={`${match.url}/sample-page`}
           component={asyncComponent(() => import('./SamplePage'))}/>
    <Route path={`${match.url}/about-us`} component = {AboutUs} />
    <Route path={`${match.url}/test`} component = {AboutTest} />
    <Route path = {`${match.url}/social-apps`} component = {SocialApps} />
    <Route path = {`${match.url}/carpool`} component ={Carpool} />
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>;


export default withRouter(Routes);

