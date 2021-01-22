import * as React from 'react';
// import { useState, useEffect } from 'react';
import { css } from "linaria";
import { h5 } from '../../styles/theme';

import _ from 'highlight.js/lib/languages/*';
import marked from 'marked';
import { Heading } from '../components/utils/Heading';
import { Layout } from '../base/Layout';



const { markdownStyle } = require('../../styles/markdown/dairyreport')

const main = css`
    margin: 3% auto 5%;
    width: 50%;

    h1 {
        margin: 4% 0 1% 1%; 
        width: 100%
    }
    h2, .h3, .h4, .h5, .h6 {
        margin: 10px 0 2px 2%;
    }
    p {
        line-height: 2.4; 
        margin-left: 2%;
    }
    
    a {
        text-decoration: none;
    }
    
    table {
        margin-left: 4%
    }
    
    ul {
        line-height: 2;
        margin-left: 4%;
        margin-bottom: 1%;
    }
    li, p {
        font-size: 1.2rem;
    }
    
    .content-img { 
        margin: 30px 0 30px 4%;  
    }
    
    pre {
        padding: 10px;
        margin: 10px 0 10px 4%;
        overflow: auto;
        font-family:"メイリオ", sans-serif;
        background-color: #f0f0f0;
    }
    code {
        font-size: ${h5};
    }
    
    @media (max-width: 800px) {
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (max-width: 500px) {
        .h1 {
            font-size: 1.6rem
        }
        .h2 {
            font-size: 1.3rem
        }
        img { 
            width: 80%;
        }
        li, p { 
            margin-left: 5%;
            font-size: 1rem;
        }

        li ul {
            margin-left: 0;
        }
    }

`

export const Me: React.FC = Layout((props: { lang: string }) => {
  const r: marked.Renderer = markdownStyle()
  const lang = props.lang === 'en' ? wiki_en : wiki_ja;
  const md: string = marked(lang, {renderer: r})

  return (
    <div>
      <div style={
        { 
          textAlign: 'center', 
          marginTop: '50px', 
        }}>
        <Heading text="me" />
        </div>
       <div className={main} dangerouslySetInnerHTML={{ __html: md }} />
    </div>
  )
});

const wiki_ja = ` 
# 基本
- 名前: 片山 拓海
- HN: たくりんとん
- 生年月日: 1999年11月23日
- 所属: 金沢工業大学工学部情報工学科3年
- 2022年新卒でVOYAGE GROUPにエンジニアとして入社します

# 自己紹介
石川県で大学生をしています．Webのフロントエンドとバックエンドに興味があります．  
最近ではgolangでWeb Assemblyを実装してみたり，webpackとexpressを使用したServer Side Renderingについての勉強をしています．  
研究で機械学習を使用する予定なのでそちらの勉強も積極的に取り組んでいきたいと思っています．思っているだけです．  
大学卒業後は東京でエンジニアとして就職予定です．  
弱点は寒さとみぞおちです．優しくしてください．

# 経歴
- 2015年
  - 石川県 遊学館高等学校入学
  - 石川県高校駅伝優勝
  - 全国高校駅伝出場
- 2016年
  - 石川県高校駅伝優勝
  - 全国高校駅伝出場
- 2017年
  - [石川県高校駅伝優勝](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [石川県高校駅伝2区区間賞](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [北信越高校駅伝3位](https://mainichi.jp/articles/20171119/ddl/k17/050/167000c)
  - [全国高校駅伝出場](https://mainichi.jp/articles/20171222/ddl/k17/050/280000c)
- 2018年
  - 遊学館高等学校卒業
  - 金沢工業大学情報工学科入学
- 2019年
  - 石川県民体育大会1500m優勝
  - 野々市市スポーツ賞受賞
  - 手取川駅伝4区区間新記録
  - 河北潟駅伝1区区間新記録
- 2020年
  - 石川県元旦駅伝1区区間2位、3区区間賞、総合優勝(1人2回以上走ってはいけないらしいので失格になっちゃった)
  - 根上駅伝1区区間賞
  - VOYAGE GROUP内定
  - VOYAGE GROUP内定承諾
- 2022年
  - 金沢工業大学卒業見込み

# 研究
- 明確に定まっているわけではありませんが、ソーシャルメディアを用いた株式の推移の予測を行う予定です。

# 好き
- ランニング
- シーシャ
- 散歩
- 猫
- ビール
- カシスオレンジ
- お寿司
- チキン南蛮
- ラーメン
- 埼玉

# 嫌い 
- 辛いもの
- エディタ戦争
- 怖い人（居酒屋で騒ぐ人, ヤンキー, 不良, 高圧的な人など）
- 寒さ

# スキル(言語)
- C
- Python
- Go
- JavaScript
- html/css

# スキル(ツール、フレームワーク、ミドルウェア)
- Django
  - 簡単なサイト作成
  - APIサーバの開発
  - ORMを使いこなします
- gin 
  - シンプルなルーティング（エンドポイント）の作成
  - APIサーバの作成
  - ユーザーなどの認証の作成
- AWS
  - route53
  - S3
  - EC2
  - RDS
  - ELB
  - ALB
  - (Lambda)
- heroku
  - デプロイ
  - ポスグレの拡張の使用
- SQL
  - 簡単なレコードの作成
  - N+1問題とは切っても切れない（勉強中）
- 自作インタプリタ
  - Goで作るインタプリタを読んで作ってみた、楽しかったので拡張中

# わからんからこれからやりたい
- TypeScript
- Rust
- Docker
- k8s
- ECS
- webpack
- babel
- wasm
- モバイルアプリ開発
- 機械学習
- 深層学習
- インフラのスケーリングや最適化
- 自動化(開発者目線)
- フロントエンドのパフォーマンスチューニング
- 自前のSSR

# インターンシップ 
- **株式会社シスネクト**
  - 2020/2
  - システム開発
  - PHP, MySQL, 自社サーバ
- **株式会社D2C**
  - 2020/2
  - インターネット広告の開発
  - Flask/Python
- **株式会社VOYAGE GROUP**
  - 2020/8
  - チームでの開発
  - インプット、アウトプットの両方を行う1ヶ月のインターンシップ
  - preact/JavaScript, Go, AWS
  - [blog](https://www.takurinton.com/post/17)
- **株式会社サイバーエージェント**
  - 2020/9
  - 就業型インターン
  - Ameba広告のDSPのJSONの処理を高速化するタスク
  - Go
  - [blog](https://www.takurinton.com/post/18)
- **株式会社楽天**
  - 2020/9
  - 2週間のチーム開発
  - React/JavaScript, Django/Python
  - [blog](https://www.takurinton.com/post/19)

# サイト
- [ブログ](/)
- [日報](/dairyreport)
- [github](https://github.com/takurinton)
- [wantedly](https://www.wantedly.com/id/takurinton)
- [qiita](https://qiita.com/takurinton)
- [facebook](https://www.facebook.com/takurinton)
- [instagram](https://www.instagram.com/___katayama___/)
`

  const wiki_en = `
# base
- name: Takumi Katayama
- nickname: takurinton
- birth: November 23, 1999
- belong: Kanazawa Institute of Technology computer science 3rd
- Worked at VOYAGE GROUP from 2022

# career
- 2015
  - Enter Yugakkan High School
  - Ishikawa High School Ekiden Winner
  - National High School Ekiden
- 2016
  - Ishikawa High School Ekiden Winner
  - National High School Ekiden
- 2017
  - [Ishikawa High School Ekiden Winner](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [Ishikawa High School Ekiden Winner 2nd ward section prize](https://mainichi.jp/articles/20171106/ddl/k17/050/232000c)
  - [Hokushinetsu High School Ekiden 3rd](https://mainichi.jp/articles/20171119/ddl/k17/050/167000c)
  - [National High School Ekiden](https://mainichi.jp/articles/20171222/ddl/k17/050/280000c)
- 2018
  - Graduated from Yugakkan High School
  - Enter Kanazawa Institute of Technology computer science
- 2019
  - Ishikawa Prefectural Athletic Meet 1500m Winner
  - Received the Nonoichi Sports Award
  - Tedorigawa Ekiden Winner 4nd ward section prize(Game Record)
  - Kahokugata Ekiden Winner 1st ward section prize(Game Record)
- 2020
  - New year Ekiden in Ishikawa Winner 3nd ward section prize and 2nd 2nd ward section prize
  - Neagari Ekiden Winner 1st ward section prize
  - Job offerd from VOYAGE GROUP
  - Acceptance of job offer VOYAGE GROUP
- 2022
  - Scheduled to graduate from Kanazawa Institute of Technology computer science

# research
- Maybe I plan to use social media to predict stock trends.

# like
- running
- walking
- cat
- beer 
- cassis orange
- sushi
- chicken Nanban
- ramen noodle

# dislike 
- spicy food 
- spite

# skill(language)
- C
- Python
- Go
- JavaScript
- html/css

# skill(tools, framework, middleware)
- Django
  - dev non SPA site
  - dev API server
  - use ORM
- gin 
  - simple routing
  - dev API server
- AWS
  - route53
  - S3
  - EC2
  - RDS
  - ELB
  - ALB
  - (Lambda)
- heroku
  - deploy
  - Postgres
- SQL
  - simple record
  - N+1( ；∀；)
- handmade language
  - interpreter made of golang

# wanna do cuz I don't understand
- TypeScript
- Rust
- Docker
- k8s
- ECS
- webpack
- babel
- wasm
- mobile applcation dev
- machine learning
- deep learning
- Infrastructure scaling/best practice
- Automation(from developer's perspective)
- performance tuning of frontend
- Japanese(most defficult!!!)

# internship 
- **Sysnect Inc.**
  - 2020/2
  - Web backend developmend
  - PHP, MySQL, On premises server
- **D2C Inc.**
  - 2020/2
  - Ad technology
  - Flask/Python
- **VOYAGE GROUP Inc.**
  - 2020/8
  - Team development
  - preact/JavaScript, Go, AWS
  - [blog](https://www.takurinton.com/post/17)
- **CyberAgent Inc.**
  - 2020/9
  - Employment type
  - Ad technology of Ameba
  - Go
  - [blog](https://www.takurinton.com/post/18)
- **Rakuten Inc.**
  - 2020/9
  - Team development
  - React/JavaScript, Django/Python
  - [blog](https://www.takurinton.com/post/19)

# site
- [portfolio](https://www.takurinton.com/profile)
- [blog](https://www.takurinton.com)
- [daily report](https://www.takurinton.com/dairyreport)
- [github](https://github.com/takurinton)
- [wantedly](https://www.wantedly.com/id/takurinton)
- [qiita](https://qiita.com/takurinton)
- [facebook](https://www.facebook.com/takurinton)
- [instagram](https://www.instagram.com/___katayama___/)
`
