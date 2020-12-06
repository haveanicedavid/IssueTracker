import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from '@material-ui/core'

import { Routes } from 'Routes'
import { Navbar } from 'components'

const App: React.FC = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes />
      </Container>
    </Router>
  )
}

export default App
