import React from 'react'
import { CircularProgress } from '@material-ui/core'

import './Issues.scss'
import { useStore } from '../../../store'
import { IssueTable } from '../../organisms'

export const Issues: React.FC = () => {
  const issuesByNum = useStore((state) => state.issuesByNum)
  const issues = Object.values(issuesByNum)

  return (
    <div className="Issues">
      {issues.length ? <IssueTable issues={issues} /> : <CircularProgress />}
    </div>
  )
}
