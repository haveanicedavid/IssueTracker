import React from 'react'
import { Avatar } from '@material-ui/core'

type Props = {
  gitHandle: string
  imgSrc: string
}
export const GitAvatarLink: React.FC<Props> = ({ gitHandle, imgSrc }) => (
  <a
    href={`https://github.com/${gitHandle}`}
    target="blank"
    rel="noopener noreferrer"
  >
    <Avatar alt={gitHandle} src={imgSrc} />
  </a>
)
