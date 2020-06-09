import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { systemReducer } from './system/reducers'
import { chatReducer } from './chat/reducer'
import { articlesReducer } from './articles/reducers'

// import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import storage from 'redux-persist/lib/storage'

// const reduxPersistConfig: PersistConfig<any> = {
//     key: 'aplication',
//     storage: storage,
//     stateReconciler: autoMergeLevel2
// };

export const rootReducer = combineReducers({
    system: systemReducer,
    chat: chatReducer,
    articles: articlesReducer

});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer, composeWithDevTools(middleWareEnhancer)
    );
    return store;
}