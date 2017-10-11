import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

function Recent() {
	return (
		<ScrollView style={style.container}>
			<View>
				<Text>Recent Page</Text>
			</View>
		</ScrollView>
	);
}

export default Recent;
