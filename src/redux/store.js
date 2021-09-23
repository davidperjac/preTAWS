import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
	key: 'root-3',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,composeWithDevTools()),
	persistor = persistStore(store);


	//export default funcion();
//export let store = createStore(persistedReducer);
//export let persistor = persistStore(store);

//const store = createStore(rootReducer, composeWithDevTools());

//export default store;
