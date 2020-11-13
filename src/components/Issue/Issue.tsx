import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Avatar from '@material-ui/core/Avatar'
import { CircularProgress, Paper, Box } from '@material-ui/core'
import { IssuesListCommentsResponseData } from '@octokit/types'

import './Issue.scss'
import { useStore } from '../../store'

export const Issue: React.FC = () => {
  const { number: issueNum } = useParams<{ number: string }>()
  const [comments, setComments] = useState<IssuesListCommentsResponseData>([])
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
        <CircularProgress />
      ) : (
        <>
          <h1>{issue?.title}</h1>
          {comments?.map((comment) => (
            <Box className="Issue-comment">
              <Avatar alt={comment.user.login} src={comment.user.avatar_url} />
              <div className="Issue-markdown">
                <ReactMarkdown plugins={[gfm]}>{comment.body}</ReactMarkdown>
              </div>
            </Box>
          ))}
        </>
      )}
    </Paper>
  )
}
