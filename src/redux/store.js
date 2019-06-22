import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import reducers from './reducers/reducer.js'
import reduxThunk from 'redux-thunk'


const persistConfig = {
  key: 'root',
  storage: FilesystemStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer, applyMiddleware(reduxThunk))
export const persistor = persistStore(store)

