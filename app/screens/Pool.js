import React from 'react';
import { View } from 'react-native';
import { PoolTabs } from '../config/routes';
import StatusBarBackground from '../components/common/StatusBarBackground/StatusBarBackground';

const style = {
	container: {
		flex: 1,
	},
};

function Pool() {
	return (
		<View style={style.container}>
			<StatusBarBackground style={style.statusBarColor} />
			<PoolTabs />
		</View>
	);
}

export default Pool;
