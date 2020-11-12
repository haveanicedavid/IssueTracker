import React from 'react'
import { format } from 'date-fns'
import MUIDataTable, { MUIDataTableProps } from 'mui-datatables'
import GitHubIcon from '@material-ui/icons/GitHub'
import { IssuesListForRepoResponseData } from '@octokit/types'
import './IssueTable.scss'
import { useStore } from '../../store'
import { CircularProgress } from '@material-ui/core'

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
    name: 'url',
    label: 'Issue link',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value: any) => {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        )
      },
    },
  },
]

const tableOptions: MUIDataTableProps['options'] = {
  filterType: 'checkbox',
  selectableRows: 'none',
  download: false,
  print: false,
}

export const IssueTable: React.FC = () => {
  const issues = useStore((state) => state.issues)

  return (
    <div className="IssueTable">
      {issues.length ? (
        <MUIDataTable
          title={'Cosmos Issues'}
          data={parseData(issues)}
          columns={tableColumns}
          options={tableOptions}
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  )
}

function formatDate(dateString: string) {
  return format(new Date(dateString), 'M/d/yyyy h:mm a')
}

function parseData(rawIssues: IssuesListForRepoResponseData) {
  return rawIssues.map((issue) => {
    const { title, user, created_at, updated_at, html_url } = issue
    return {
      title,
      url: html_url,
      created: formatDate(created_at),
      updated: formatDate(updated_at),
      creator: user.login,
    }
  })
}
