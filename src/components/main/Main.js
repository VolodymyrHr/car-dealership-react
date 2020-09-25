import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cars from './Cars'
import Managers from './Managers'
import Customers from './Customers'
import Deals from './Deals'
import FullDeal from './FullDeal'

function Main() {
    return (
        <main>
          <Switch>
            <Route exact path='/cars' component={Cars}/>
            <Route path='/managers' component={Managers}/>
            <Route path='/customers' component={Customers}/>
            <Route exact path='/deals' component={Deals}/>
            <Route path='/deals/:number' component={FullDeal}/>
          </Switch>            
        </main>
    )
}

export default Main
