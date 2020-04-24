import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
import AboutUs from './AboutUs';
import Dashboard from './dashboard';
import SocialApps from './socialApps';
import Carpool from './carpool';
import AboutTest from './AboutUs/AboutTest';
import Ticketbidding from './ticketbidding';
import {Redirect} from 'react-router';
import TicketTrade from './ticketTrade';

const Routes = ({match}) =>
  <Switch>
    <Redirect exact from = {`${match.url}`} to={`${match.url}/dashboard`}></Redirect>
    <Route path={`${match.url}/dashboard`} component = {Dashboard} />
    <Route path={`${match.url}/sample-page`}
           component={asyncComponent(() => import('./SamplePage'))}/>
    <Route path={`${match.url}/about-us`} component = {AboutUs} />
    <Route path={`${match.url}/test`} component = {AboutTest} />
    <Route path = {`${match.url}/social-apps`} component = {SocialApps} />
    <Route path = {`${match.url}/carpool`} component ={Carpool} />
    <Route path = {`${match.url}/ticket-Bidding`} component ={Ticketbidding} />
    <Route path = {`${match.url}/ticket-trading`} component ={TicketTrade} />
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>;


export default withRouter(Routes);

