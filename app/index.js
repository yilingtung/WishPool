import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Tabs } from './config/routes';

const store = configureStore();
function App() {
	return (
		<Provider store={store}>
			<Tabs />
		</Provider>
	);
}

export default App;
