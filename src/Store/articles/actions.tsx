
import { Article, SEND_ARTICLES, DELETE_ARTICLES } from './type'
export function sendArticles(newArticle: Article) {
    return {
        type: SEND_ARTICLES,
        payload: newArticle
    };
}

export function deleteArticles(id: number) {
    return {
        type: DELETE_ARTICLES,
        meta: { id }
    };
}