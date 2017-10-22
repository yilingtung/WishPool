import React from 'react';
import {
	View,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { MainTabs } from './config/routes';

const store = configureStore();

const style = {
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
};

function App() {
	return (
		<Provider store={store}>
			<View style={style.container}>
				<MainTabs />
			</View>
		</Provider>
	);
}

export default App;
