import { format } from 'date-fns'
import { IssuesListForRepoResponseData } from '@octokit/types'

function formatDate(dateString: string) {
  return format(new Date(dateString), 'M/d/yyyy h:mm a')
}

export function parseTableData(rawIssues: IssuesListForRepoResponseData) {
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
