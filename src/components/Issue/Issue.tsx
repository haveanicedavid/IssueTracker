import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import './Issue.scss'
import { /* BASE_URL, */ useStore } from '../../store'
import Avatar from '@material-ui/core/Avatar'
import { CircularProgress, Paper, Box } from '@material-ui/core'

export const Issue: React.FC = () => {
  const { number: issueNum } = useParams<{ number: string }>()
  const [comments, setComments] = useState<any[]>([])
  const issuesByNum = useStore((state) => state.issuesByNum)
  const issue = issuesByNum[issueNum]
  console.log('issue :>> ', issue)
  const commentsUrl = issue?.comments_url

  useEffect(() => {
    const fetchComments = async () => {
      if (commentsUrl) {
        // const { data } = await axios.get(commentsUrl)
        const data = COMMENTS
        setComments(data)
      }
    }
    fetchComments()
  }, [commentsUrl])

  if (!issue?.user) return <CircularProgress />
  return (
    <Paper className="Issue">
      <div className="Issue-title"></div>
      <Avatar alt={issue.user.login} src={issue.user.avatar_url} />
      <h1>{issue?.title}</h1>
      <h2>Assignees: </h2>
      {issue.assignees?.map((assignee) => (
        <>{assignee.login}</>
      ))}

      <h2>Comments: </h2>
      {comments?.map((comment) => (
        <Box className="Issue-comment">
          <Avatar alt={comment.user.login} src={comment.user.avatar_url} />
          <div className="Issue-markdown">
            <ReactMarkdown plugins={[gfm]}>{comment.body}</ReactMarkdown>
          </div>
        </Box>
      ))}
    </Paper>
  )
}

const COMMENTS = [
  {
    url:
      'https://api.github.com/repos/cosmos/cosmos-sdk/issues/comments/726008295',
    html_url:
      'https://github.com/cosmos/cosmos-sdk/issues/7894#issuecomment-726008295',
    issue_url: 'https://api.github.com/repos/cosmos/cosmos-sdk/issues/7894',
    id: 726008295,
    node_id: 'MDEyOklzc3VlQ29tbWVudDcyNjAwODI5NQ==',
    user: {
      login: 'alessio',
      id: 229356,
      node_id: 'MDQ6VXNlcjIyOTM1Ng==',
      avatar_url: 'https://avatars1.githubusercontent.com/u/229356?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/alessio',
      html_url: 'https://github.com/alessio',
      followers_url: 'https://api.github.com/users/alessio/followers',
      following_url:
        'https://api.github.com/users/alessio/following{/other_user}',
      gists_url: 'https://api.github.com/users/alessio/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/alessio/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/alessio/subscriptions',
      organizations_url: 'https://api.github.com/users/alessio/orgs',
      repos_url: 'https://api.github.com/users/alessio/repos',
      events_url: 'https://api.github.com/users/alessio/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/alessio/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2020-11-12T11:04:21Z',
    updated_at: '2020-11-12T11:04:21Z',
    author_association: 'MEMBER',
    body:
      'Thanks for taking the time to report this bug and helping to make Cosmos SDK better. Could you please tell me exactly what environment is this reproducible with? Please provide the following details too:\r\n\r\n1. Operating System:\r\n  1. Windows, Mac or Linux\r\n  2. If Linux, the enrivonment is headless or GNOME/KDE/Xfce/others?\r\n2. `--keyring-backend` option\r\n\r\nThanks.\r\n',
    performed_via_github_app: null,
  },
  {
    url:
      'https://api.github.com/repos/cosmos/cosmos-sdk/issues/comments/726164303',
    html_url:
      'https://github.com/cosmos/cosmos-sdk/issues/7894#issuecomment-726164303',
    issue_url: 'https://api.github.com/repos/cosmos/cosmos-sdk/issues/7894',
    id: 726164303,
    node_id: 'MDEyOklzc3VlQ29tbWVudDcyNjE2NDMwMw==',
    user: {
      login: 'dpederson-figure',
      id: 55999092,
      node_id: 'MDQ6VXNlcjU1OTk5MDky',
      avatar_url: 'https://avatars0.githubusercontent.com/u/55999092?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/dpederson-figure',
      html_url: 'https://github.com/dpederson-figure',
      followers_url: 'https://api.github.com/users/dpederson-figure/followers',
      following_url:
        'https://api.github.com/users/dpederson-figure/following{/other_user}',
      gists_url:
        'https://api.github.com/users/dpederson-figure/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/dpederson-figure/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/dpederson-figure/subscriptions',
      organizations_url: 'https://api.github.com/users/dpederson-figure/orgs',
      repos_url: 'https://api.github.com/users/dpederson-figure/repos',
      events_url:
        'https://api.github.com/users/dpederson-figure/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/dpederson-figure/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2020-11-12T15:52:01Z',
    updated_at: '2020-11-12T15:52:01Z',
    author_association: 'NONE',
    body:
      'OS: Linux - Ubuntu 20.04 LTS w/ GNOME.  Keyring is as stated above: `--keyring-backend test` ',
    performed_via_github_app: null,
  },
  {
    url:
      'https://api.github.com/repos/cosmos/cosmos-sdk/issues/comments/726168266',
    html_url:
      'https://github.com/cosmos/cosmos-sdk/issues/7894#issuecomment-726168266',
    issue_url: 'https://api.github.com/repos/cosmos/cosmos-sdk/issues/7894',
    id: 726168266,
    node_id: 'MDEyOklzc3VlQ29tbWVudDcyNjE2ODI2Ng==',
    user: {
      login: 'dpederson-figure',
      id: 55999092,
      node_id: 'MDQ6VXNlcjU1OTk5MDky',
      avatar_url: 'https://avatars0.githubusercontent.com/u/55999092?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/dpederson-figure',
      html_url: 'https://github.com/dpederson-figure',
      followers_url: 'https://api.github.com/users/dpederson-figure/followers',
      following_url:
        'https://api.github.com/users/dpederson-figure/following{/other_user}',
      gists_url:
        'https://api.github.com/users/dpederson-figure/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/dpederson-figure/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/dpederson-figure/subscriptions',
      organizations_url: 'https://api.github.com/users/dpederson-figure/orgs',
      repos_url: 'https://api.github.com/users/dpederson-figure/repos',
      events_url:
        'https://api.github.com/users/dpederson-figure/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/dpederson-figure/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2020-11-12T15:58:22Z',
    updated_at: '2020-11-12T15:58:22Z',
    author_association: 'NONE',
    body:
      'A also was just able to reproduce this on macOS Catalina Version 10.15.7.  Thank you.',
    performed_via_github_app: null,
  },
  {
    url:
      'https://api.github.com/repos/cosmos/cosmos-sdk/issues/comments/726211051',
    html_url:
      'https://github.com/cosmos/cosmos-sdk/issues/7894#issuecomment-726211051',
    issue_url: 'https://api.github.com/repos/cosmos/cosmos-sdk/issues/7894',
    id: 726211051,
    node_id: 'MDEyOklzc3VlQ29tbWVudDcyNjIxMTA1MQ==',
    user: {
      login: 'alessio',
      id: 229356,
      node_id: 'MDQ6VXNlcjIyOTM1Ng==',
      avatar_url: 'https://avatars1.githubusercontent.com/u/229356?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/alessio',
      html_url: 'https://github.com/alessio',
      followers_url: 'https://api.github.com/users/alessio/followers',
      following_url:
        'https://api.github.com/users/alessio/following{/other_user}',
      gists_url: 'https://api.github.com/users/alessio/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/alessio/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/alessio/subscriptions',
      organizations_url: 'https://api.github.com/users/alessio/orgs',
      repos_url: 'https://api.github.com/users/alessio/repos',
      events_url: 'https://api.github.com/users/alessio/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/alessio/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2020-11-12T17:08:00Z',
    updated_at: '2020-11-12T17:08:00Z',
    author_association: 'MEMBER',
    body:
      "When you pass `--keyring-backend=test` you don't use OS backends (`libsecret` on GNOME, `kwallet` on KDE, `keychain` on MacOS, etc). Plus, please beware that `--keyring-backend=test` is **for testing purposes only**, i.e. validators that join testnets **should not use it**. Alternatively, they can use `--keyring-backend=file` or `--keyring-backend=pass`. Note that the latter depends on the `pass` binary, see https://www.passwordstore.org/ for more information how to install it.",
    performed_via_github_app: null,
  },
]
