export interface PostProps {
    id: number,
    title: string, 
    category: string,
    contents: string, 
    contents_image_url: string,
    pub_date: string,
    comment: CommentProps[]
}

export interface CommentProps {
    name: string, 
    contents: string, 
    pub_date: string
}