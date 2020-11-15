import { IssuesListForRepoResponseData } from '@octokit/types'
import { IssuesListCommentsResponseData } from '@octokit/types'

export type Issues = IssuesListForRepoResponseData
export type Issue = Issues[0]
export type Comments = IssuesListCommentsResponseData
export type Comment = Comments[0]
