import * as React from 'react';
import { Layout } from '../base/Layout';
import { Comments } from '../components/pages/post/Comments';
import { css } from 'linaria';
import { h5 } from '../../styles/theme';
import { Heading } from '../components/utils/Heading';
import { PostProps } from '../../types/types';
import { blog } from '../../styles/markdown';

const detail = css`
    text-align: center; 
    margin: 50px; 

    p {
        font-size: ${h5};
        color: $theme_text;
        font-weight: $thick;
    }
`

export const Post = Layout((props: PostProps) =>  
  (
    <div>
      <div className={detail}>
        <Heading text={props.title} />
        <p>{props.pub_date}</p>
      </div>
       <div className={blog} dangerouslySetInnerHTML={{ __html: props.contents }} />

       <Comments postId={props.id} comment={props.comment} />
    </div>
  )
);