import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress, Paper, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

import './Issue.scss'
import { useStore } from '../../../store'
import { Comment } from '../../organisms'
import { Comments, Issue as IssueType } from '../../../types'

const Title: React.FC<{ issue: IssueType }> = ({ issue }) => (
  <Typography variant="h5" className="Issue-title">
    {issue.title} <span className="Issue-num">#{issue.number}</span>
    <a
      href={issue.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="Issue-git"
    >
      <GitHubIcon />
    </a>
  </Typography>
)

export const Issue: React.FC = () => {
  const { number: issueNum } = useParams<{ number: string }>()
  const [comments, setComments] = useState<Comments>([])
  const issuesByNum = useStore((state) => state.issuesByNum)
  const issue = issuesByNum[issueNum]
  const commentsUrl = issue?.comments_url

  useEffect(() => {
    const fetchComments = async () => {
      if (commentsUrl) {
        const { data } = await axios.get(commentsUrl)
        setComments(data)
      }
    }
    fetchComments()
  }, [commentsUrl])

  return (
    <Paper className="Issue" elevation={3}>
      {!issue?.user ? (
        <CircularProgress className="Issue-loader" />
      ) : (
        <>
          <Title issue={issue} />
          <Comment
            commentBody={issue.body}
            userLogin={issue.user.login}
            userAvatar={issue.user.avatar_url}
          />

          {comments?.map((comment, i) => (
            <Comment
              key={i}
              commentBody={comment.body}
              userLogin={comment.user.login}
              userAvatar={comment.user.avatar_url}
            />
          ))}
        </>
      )}
    </Paper>
  )
}
