import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import { IssuesListForRepoResponseData } from '@octokit/types'
import MUIDataTable, { MUIDataTableProps } from 'mui-datatables'
import GitHubIcon from '@material-ui/icons/GitHub'

import './Issues.scss'
import { useStore } from '../../store'
import { formatDate } from '../../util'

const tableOptions: MUIDataTableProps['options'] = {
  filterType: 'checkbox',
  selectableRows: 'none',
  download: false,
  print: false,
}

export const Issues: React.FC = () => {
  const issuesByNum = useStore((state) => state.issuesByNum)
  const issues = Object.values(issuesByNum)

  const tableColumns: MUIDataTableProps['columns'] = [
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
        customBodyRenderLite: (issueIndex: number) => {
          const issue = issues[issueIndex]
          return <Link to={`/issues/${issue.number}`}>{issue.title}</Link>
        },
      },
    },
    {
      name: 'created',
      label: 'Created At',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'updated',
      label: 'Updated At',
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: 'commentCount',
      label: 'Comment Count',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'url',
      label: 'Link',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (href: any) => {
          return (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          )
        },
      },
    },
  ]

  return (
    <div className="Issues">
      {issues.length ? (
        <MUIDataTable
          title="Cosmos Issues"
          data={parseTableData(issues)}
          columns={tableColumns}
          options={tableOptions}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

function parseTableData(rawIssues: IssuesListForRepoResponseData) {
  return rawIssues.map((issue) => {
    const { title, user, created_at, updated_at, html_url, comments } = issue
    return {
      title,
      url: html_url,
      commentCount: comments,
      created: formatDate(created_at),
      updated: formatDate(updated_at),
      creator: user.login,
    }
  })
}
