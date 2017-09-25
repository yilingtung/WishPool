import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Tabs } from './config/routes';

function App() {
	return (
		<Provider store={configureStore()}>
			<Tabs />
		</Provider>
	);
}

export default App;
