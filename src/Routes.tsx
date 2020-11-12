import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Issues, Issue } from './components'

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/issues/:number">
      <Issue />
    </Route>
    <Route exact path="/">
      <Issues />
    </Route>
  </Switch>
)
