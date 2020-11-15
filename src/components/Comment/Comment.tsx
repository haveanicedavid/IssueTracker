import React from 'react'
import { Avatar, Box } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import './Comment.scss'

type Props = {
  userLogin: string
  userAvatar: string
  commentBody: string
}
export const Comment: React.FC<Props> = ({
  userLogin,
  userAvatar,
  commentBody,
}) => {
  return (
    <Box className="Comment">
      <Avatar alt={userLogin} src={userAvatar} />
      <div className="Comment-main">
        <div className="Comment-author">
          {userLogin} <span className="Comment-says">commented:</span>
        </div>

        <div className="Comment-body">
          <ReactMarkdown plugins={[gfm]} className="Comment-markdown">
            {commentBody}
          </ReactMarkdown>
        </div>
      </div>
    </Box>
  )
}
