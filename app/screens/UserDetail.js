import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import BackButton from '../components/BackButton';

function UserDetail() {
	return (
		<ScrollView>
			<View>
				<Text>UserDetail Page</Text>
			</View>
			<BackButton />
		</ScrollView>
	);
}

export default UserDetail;
