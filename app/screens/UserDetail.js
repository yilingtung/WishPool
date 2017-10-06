import React from 'react';
import { Text, View, ScrollView } from 'react-native';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

function UserDetail() {
	return (
		<ScrollView style={style.container}>
			<View>
				<Text>UserDetail Page</Text>
			</View>
		</ScrollView>
	);
}

export default UserDetail;
