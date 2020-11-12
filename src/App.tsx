import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from '@material-ui/core'
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
          <Routes />
        </Container>
      </div>
    </Router>
  )
}

export default App
