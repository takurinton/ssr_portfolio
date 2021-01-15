const k = require('kuromoji')

export const morphemeDissected = (text: string) => {
    k.builder({ dicPath: "/dict" }).build((err, tokenizer) => {
        if(err){
          console.log(err)
          return 
        } else {
          const tokens = tokenizer.tokenize(text)
          console.log(tokens)
          return tokens
        }
    })
}
