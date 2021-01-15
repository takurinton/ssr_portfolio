import Head from 'next/head';
import { HeadProps } from '../../props/props'

export const HtmlHead = ({ title, description, image, url }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="たくりんとんのポートフォリオです" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content="https://www.takurinton.com" />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="shortcut icon" href={"https://www.takurinton.com/me.jpeg"} />
      <link rel="apple-touch-icon" href={"https://www.takurinton.com/me.jpeg"} />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/solarized-dark.min.css" />   
      </Head>
  )
}