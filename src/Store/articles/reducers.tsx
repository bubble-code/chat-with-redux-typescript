
import { Articles, ArticlesActionTypes, SEND_ARTICLES, DELETE_ARTICLES } from './type'

const initialState: Articles = {
    articles: []
};

export function articlesReducer(state = initialState,
    action: ArticlesActionTypes): Articles {
    switch (action.type) {
        case SEND_ARTICLES:
            return {
                articles: [...state.articles,
                action.payload]
            }
        case DELETE_ARTICLES:
            return {
                articles: state.articles.filter(
                    (item) => item.id !== action.meta.id
                )
            };
        default:
            return state;
    }
}