import * as React from 'react';
import { Layout } from '../base/Layout';
import { css } from 'linaria';

import { Heading } from '../components/utils/Heading';

import marked from 'marked';
const { markdownStyle } = require('../../styles/markdown/dairyreport');
import { PostProps } from '../../types/types';
// import { Comment } from './comment/Comment'

import { blog } from '../../styles/markdown';
import { syntaxHighlight } from '../../styles/markdown/syntaxHighlight';


const detail = css`
    text-align: center; 
    margin: 50px; 

    p {
        font-size: $h5;
        color: $theme_text;
        font-weight: $thick;
    }
`

export const Post: React.FC<PostProps> = Layout((props: PostProps) => {
  syntaxHighlight() 
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(props.contents, {renderer: r})
  const pubDate = props.pub_date.substring(0, 10)

  return (
    <div>
      <div className={detail}>
        <Heading text={props.title} />
        <p>{pubDate}</p>
      </div>
       <div className={blog} dangerouslySetInnerHTML={{ __html: md }} />

       {/* <Comment postId={props.props.id} comment={props.props.comment} /> */}
    </div>
  )
});