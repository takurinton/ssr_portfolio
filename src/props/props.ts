export interface InternProps {
    id: number, 
    company_name: string, 
    overview: string, 
    period: string 
}

export interface MadeProps {
    id: number, 
    name: string,
    url: string, 
    explanation: string
}

export interface SkillProps {
    id: number, 
    name: string
}

export interface MineProps {
    content: string
}

export interface PortfolioProps {
    intern: InternProps[]
    skill: SkillProps[], 
    made: MadeProps[], 
    mine: MineProps
}

export interface Dairyreport {
    id: number, 
    pub_date: string
}

export interface DairyreportProps {
    next: number | null, 
    prev: number | null, 
    results: Dairyreport[]
}

export interface DeiryreportPost {
    pub_date: string, 
    contents: string
}
export interface DairyreportContent {
    comment: [], 
    post: DeiryreportPost
}

export interface HeadProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

export type GetPost = {
    next: string | null, 
    previous: string | null, 
    total: number, 
    category: any,
    current: number, 
    results: PostProps[], 
    page_size: string, 
    first: string, 
    last: string
}

// post
export type PostProps = {
    id: number,
    title: string, 
    category: string,
    contents: string, 
    contents_image_url: string,
    pub_date: string,
    comment: CommentProps[]
}
export const initialPost:PostProps = {
    id: 0,
    title: '', 
    category: '', 
    contents: '',
    contents_image_url: '', 
    pub_date: '', 
    comment: []
}

// category
export type CategoryProps = {
    category: string[]
}
export const initialCategory:CategoryProps = {
    category: []
}


// comment
export interface CommentProps {
    name: string, 
    contents: string, 
    pub_date: string
}
export const initialCommentState:CommentProps = {
    name: '', 
    contents: '', 
    pub_date: ''
}
export const initialComment:CommentProps[] = [
    {
        name: '', 
        contents: '', 
        pub_date: ''
    }
]

// search
export type TypeSearch = {
    content: string, 
}
export const initialSearch = {
    content: '', 
}

export interface Mine101ContentProps {
    id: number, 
    title: string, 
    contents: string 
}