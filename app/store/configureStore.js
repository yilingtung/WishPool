import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'dev') {
	const { createLogger } = require('redux-logger'); // eslint-disable-line global-require
	middlewares.push(createLogger());
}

export default function configureStore() {
	const store = createStore(
		reducers,
		undefined,
		compose(applyMiddleware(...middlewares), autoRehydrate()),
	);
	persistStore(store, { storage: AsyncStorage });
	return store;
}
