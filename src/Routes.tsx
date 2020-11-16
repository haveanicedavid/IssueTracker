import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Issues, Issue } from 'components/pages'

export const Routes: React.FC = () => (
  <AnimatePresence>
    <Switch>
      <Route path="/issues/:number">
        <Issue />
      </Route>
      <Route exact path="/">
        <Issues />
      </Route>
    </Switch>
  </AnimatePresence>
)
