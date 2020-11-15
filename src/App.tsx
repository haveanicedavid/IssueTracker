import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { ReactComponent as CosmosIcon } from './assets/cosmos-icon.svg'

import './App.scss'
import { useStore } from './store'
import { Routes } from './Routes'

const App: React.FC = () => {
  const fetchIssues = useStore((state) => state.fetchIssues)

  useEffect(() => {
    fetchIssues()
  }, []) // eslint-disable-line

  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">
          <div className="App-title">
            <Link to="/">
              <CosmosIcon className="App-logo" />
            </Link>
            <h1>Issue Tracker</h1>
          </div>
          <Routes />
        </Container>
      </div>
    </Router>
  )
}

export default App
