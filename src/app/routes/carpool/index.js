import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Carpool = ({match}) =>(
    <div className = "app-wrapper">
        <Switch>
            <Redirect exact from = {`${match.url}/`} to={`${match.url}/search-for-trip`} />
            <Route path = {`${match.url}/search-for-trip`} component = {asyncComponent(() => import('./routes/searchtrip'))} />
            <Route path = {`${match.url}/post-trip`} component = {asyncComponent(() => import('./routes/posttrip'))} />
            <Route path = {`${match.url}/edit-trip/:handle`} component = {asyncComponent(() => import('./routes/edittrip'))} />
            <Route path = {`${match.url}/trip-details/:handle`} component = {asyncComponent(() => import('./routes/tripdetails'))} />
        </Switch>
    </div>
);

export default Carpool;