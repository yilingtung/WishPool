import React from 'react';
import {
	View,
	StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { MainTabs } from './config/routes';

const store = configureStore();

const style = {
	container: {
		flex: 1,
	},
};

function App() {
	return (
		<Provider store={store}>
			<View style={style.container}>
				<StatusBar
					barStyle="light-content"
				/>
				<MainTabs />
			</View>
		</Provider>
	);
}

export default App;
