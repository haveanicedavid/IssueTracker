import React from 'react'
import { Avatar, Box } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'
import { IssuesListCommentsResponseData } from '@octokit/types'
import gfm from 'remark-gfm'
import './Comment.scss'

type Props = {
  comment: IssuesListCommentsResponseData[0]
}
export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <Box className="Comment">
      <Avatar alt={comment.user.login} src={comment.user.avatar_url} />
      <div className="Comment-main">
        <div className="Comment-author">
          {comment.user.login} <span className="Comment-says">commented:</span>
        </div>

        <div className="Comment-body">
          <ReactMarkdown plugins={[gfm]} className="Comment-markdown">
            {comment.body}
          </ReactMarkdown>
        </div>
      </div>
    </Box>
  )
}
