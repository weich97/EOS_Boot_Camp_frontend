import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const TicketTrade = ({match}) => (
    <div className ="app-wrapper">
        <Switch>
            <Redirect exact from = {`${match.url}`} to={`${match.url}/sell-account`}></Redirect>
            <Route path = {`${match.url}/sell-account`} component = {asyncComponent(() => import('./routes/sellaccount'))} />
        </Switch>
    </div>
)

export default TicketTrade;