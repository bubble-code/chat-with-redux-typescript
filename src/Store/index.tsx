import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {systemReducer} from './system/reducers'
import {chatReducer} from './chat/reducer'
import {articlesReducer} from './articles/reducers'

export const rootReducer =combineReducers({
    system: systemReducer,
    chat: chatReducer,
    articles: articlesReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(){
    const middlewares  = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer, composeWithDevTools(middleWareEnhancer)
    );
    return store;
}