import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Dashboard = ({match}) =>(
    <div className = "app-wrapper">
        <Switch>
            <Redirect exact from = {`${match.url}/`} to={`${match.url}/listing`} />
            <Route path = {`${match.url}/listing`} component = {asyncComponent(() => import('./routes/Listing'))} />
        </Switch>
    </div>
);

export default Dashboard;