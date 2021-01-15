import marked from 'marked';
const { markdownStyle } = require('../../styles/markdown/dairyreport')
import { Heading } from '../../component/common/atoms/Heading'
import { DairyreportContent } from '../../props/props' 
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/markdown.scss')

export const DairyDetail = (props: {props: DairyreportContent}) => {
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(props.props.post.contents, {renderer: r})
  const pubDate = props.props.post.pub_date.substring(0, 10)
  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | ${pubDate}の日報`}
        description={`${pubDate}の日報`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text={pubDate} />
      </div>
       <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
}