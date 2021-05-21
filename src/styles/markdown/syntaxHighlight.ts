import highlightjs from 'highlight.js';
import marked from 'marked';

export const syntaxHighlight = () => {
    marked.setOptions({
        highlight: (code:string, lang:string) => {
            return highlightjs.highlightAuto(code, [lang]).value;
        },
    })
}