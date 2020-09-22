import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cars from './Cars'
import Managers from './Managers'
import Customers from './Customers'
import Deals from './Deals'

function Main() {
    return (
        <main>
          <Switch>
            <Route exact path='/cars' component={Cars}/>
            <Route path='/managers' component={Managers}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/deals' component={Deals}/>
          </Switch>            
        </main>
    )
}

export default Main
