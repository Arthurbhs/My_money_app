import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard from '../dashboard/Dashboard'

export default props => (
    <div className='content-wrapper'> 
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Switch>
</div>
)