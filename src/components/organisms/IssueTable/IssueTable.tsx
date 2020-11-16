import React from 'react'
import { Link } from 'react-router-dom'
import MUIDataTable, { MUIDataTableProps } from 'mui-datatables'
import GitHubIcon from '@material-ui/icons/GitHub'

import { Issues } from 'types'
import { formatDate } from 'helpers'

type Props = {
  issues: Issues
}
export const IssueTable: React.FC<Props> = ({ issues }) => {
  const tableOptions: MUIDataTableProps['options'] = {
    filterType: 'checkbox',
    selectableRows: 'none',
    download: false,
    print: false,
  }

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
    <MUIDataTable
      title="Cosmos Issues"
      data={parseTableData(issues)}
      columns={tableColumns}
      options={tableOptions}
    />
  )
}

function parseTableData(rawIssues: Issues) {
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
