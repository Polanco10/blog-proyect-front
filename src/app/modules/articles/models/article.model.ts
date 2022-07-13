export interface IArticle {
    id: string;
    title: string;
    resume: string;
    description: string;
    createdAt: Date;
    author: string;
    tags: Array<string>;
    imageCover: string;
    category: string;
}


