import _ from 'highlight.js/lib/languages/*';
import marked from 'marked';
import { Heading } from '../../component/common/atoms/Heading'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/markdown/wiki.scss')
const { markdownStyle } = require('../../styles/markdown/dairyreport')

const Memo = () => {
//   const r: marked.Renderer = markdownStyle()
//   const md: string = marked(res.sake, {renderer: r})

  return (
    <div>
      <HtmlHead 
        title={`たくりんとん | memo`}
        description={`memo`}
        image={'https://www.takurinton.com/me.jpeg'}
        url={'https://takurinton.com'}
      />
      
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="技術や日常のメモ置き場" />
        <h1>comming soon</h1>
      </div>
       {/* <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} /> */}
    </div>
  )
}


// Memo.getInitialProps = async () => {
//   return await '';
// }

export default Memo