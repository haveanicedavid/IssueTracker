import React from 'react'
import MUIDataTable from 'mui-datatables'
import { IssuesListForRepoResponseData } from '@octokit/types'

import { useStore } from '../store'

const tableColumns = [
  {
    name: 'creator',
    label: 'Creator',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: false,
      sort: true,
    },
  },
]
const tableOptions = {
  filterType: 'checkbox' as 'checkbox',
}

export const IssueTable: React.FC = () => {
  const issues = useStore((state) => state.issues)
  const tableData = issues.length ? parseData(issues) : []

  return (
    <>
      <MUIDataTable
        title={'Employee List'}
        data={tableData}
        columns={tableColumns}
        options={tableOptions}
      />
    </>
  )
}

function parseData(rawIssues: IssuesListForRepoResponseData) {
  return rawIssues.map((issue) => {
    const { title, user } = issue
    return {
      title,
      creator: user.login,
    }
  })
}
