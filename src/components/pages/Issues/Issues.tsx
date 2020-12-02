import React from 'react'
import { motion } from 'framer-motion'
import { CircularProgress } from '@material-ui/core'

import './Issues.scss'
import { useStore } from 'store/store'
import { IssueTable } from 'components/organisms'

export const Issues: React.FC = () => {
  const issuesByNum = useStore((state) => state.issuesByNum)
  const issues = Object.values(issuesByNum)

  return (
    <motion.div className="Issues" initial={{ x: -22 }} animate={{ x: 0 }}>
      {issues.length ? <IssueTable issues={issues} /> : <CircularProgress />}
    </motion.div>
  )
}
