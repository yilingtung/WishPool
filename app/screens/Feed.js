import React from 'react';
import { View, ScrollView } from 'react-native';
import Wish from '../components/Wish';

function Feed() {
	return (
		<ScrollView>
			<View>
				<Wish />
			</View>
		</ScrollView>
	);
}

export default Feed;
