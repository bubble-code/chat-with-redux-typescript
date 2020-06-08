
export interface Article {
    text: string;
    id: number;
}

export interface Articles {
    articles: Article[];
}
export const SEND_ARTICLES = "SEND_ARTICLES";
export const DELETE_ARTICLES = "DELETE_ARTICLES";

interface SendArticleAction {
    type: typeof SEND_ARTICLES;
    payload: Article;
}
interface DeleteArticleAction {
    type: typeof DELETE_ARTICLES
    meta: { id: number };
}
export type ArticlesActionTypes =
    | SendArticleAction
    | DeleteArticleAction;