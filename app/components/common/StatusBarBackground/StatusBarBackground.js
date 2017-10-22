import React from 'react';
import { View, Platform } from 'react-native';

const style = {
	container: {
		height: (Platform.OS === 'ios') ? 20 : 0,
		backgroundColor: 'white',
	},
};

const StatusBarBackground = props => (
	<View style={[style.container, props.style || {}]} />
);

export default StatusBarBackground;
