import React from 'react'
import { Box } from '@material-ui/core'
import './Comment.scss'
import { Markdown } from '../../molecules'
import { GitAvatarLink } from '../../atoms'

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
      <GitAvatarLink imgSrc={userAvatar} gitHandle={userLogin} />
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
