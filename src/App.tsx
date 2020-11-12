import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import './App.scss'
import { useStore } from './store'
import { IssueTable } from './components'

const App: React.FC = () => {
  const fetchIssues = useStore((state) => state.fetchIssues)

  useEffect(() => {
    fetchIssues()
  }, []) // eslint-disable-line

  return (
    <div className="App">
      <Container maxWidth="lg">
        <IssueTable />
      </Container>
    </div>
  )
}

export default App
