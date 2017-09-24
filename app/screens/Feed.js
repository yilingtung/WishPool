import React from 'react';
import { View, ScrollView } from 'react-native';
import WishList from '../components/WishList';

function Feed() {
	return (
		<ScrollView>
			<View>
				<WishList />
			</View>
		</ScrollView>
	);
}

export default Feed;
