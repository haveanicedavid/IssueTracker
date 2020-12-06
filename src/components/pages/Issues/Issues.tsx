import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CircularProgress } from '@material-ui/core'

import './Issues.scss'
import { useStore } from 'store'
import { IssueTable } from 'components/organisms'

export const Issues: React.FC = () => {
  const fetchIssues = useStore((state) => state.fetchIssues)
  const fetchIssueCount = useStore((state) => state.fetchIssueCount)
  const issuesByNum = useStore((state) => state.issuesByNum)
  const issues = Object.values(issuesByNum)

  useEffect(() => {
    fetchIssues(1)
    fetchIssueCount()
  }, []) // eslint-disable-line

  return (
    <motion.div className="Issues" initial={{ x: -22 }} animate={{ x: 0 }}>
      {issues.length ? (
        <IssueTable issues={issues} fetchIssues={fetchIssues} />
      ) : (
        <CircularProgress />
      )}
    </motion.div>
  )
}
