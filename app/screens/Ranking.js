import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

function Ranking() {
	return (
		<ScrollView style={style.container}>
			<View>
				<Text>Ranking Page</Text>
			</View>
		</ScrollView>
	);
}

export default Ranking;
