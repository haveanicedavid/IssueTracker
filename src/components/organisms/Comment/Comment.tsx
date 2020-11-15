import React from 'react'
import { Avatar, Box } from '@material-ui/core'
import './Comment.scss'
import { Markdown } from '../../molecules'

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
          <Markdown markdownStr={commentBody} />
        </div>
      </div>
    </Box>
  )
}
