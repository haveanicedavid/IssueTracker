import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import './Markdown.scss'

type Props = { markdownStr: string }

export const Markdown: React.FC<Props> = ({ markdownStr }) => {
  return (
    <ReactMarkdown plugins={[gfm]} className="Markdown">
      {markdownStr}
    </ReactMarkdown>
  )
}
