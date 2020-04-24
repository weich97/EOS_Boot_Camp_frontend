import React from 'react';
import asyncComponent from '../../../util/asyncComponent';
import {Redirect, Route, Switch} from 'react-router-dom';

const Ticketbidding = ({match}) => (
    <div className ="app-wrapper">
        <Switch>
            <Redirect exact from = {`${match.url}`} to={`${match.url}/show-tickets`}></Redirect>
            <Route path = {`${match.url}/show-tickets`} component = {asyncComponent(() => import('./routes/showtickets'))} />
            <Route path = {`${match.url}/bid-tickets`} component = {asyncComponent(() => import('./routes/bidtickets'))} />
        </Switch>

    </div>
)

export default Ticketbidding;