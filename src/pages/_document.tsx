import * as React from "react";
import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

interface Props {}

class Document extends NextDocument<Props> {
    render() {
      return (
        <Html lang="ja">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }

export default Document