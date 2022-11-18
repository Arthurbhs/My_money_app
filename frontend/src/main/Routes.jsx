import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'


import BillingCycle from '../billingCycle/BillingCycle'
import DashboardTwo from '../dashboard2/DashboardTwo'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={DashboardTwo} />
        <Route path='/billingCycle' component={BillingCycle}/>
        <Redirect fromm='*' to='/' />

       

    </Router>
)