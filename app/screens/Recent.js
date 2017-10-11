import React from 'react';
import {
	Text,
	View,
	ScrollView,
} from 'react-native';
import WishList from '../components/WishList';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

function Recent() {
	return (
		<View style={style.container}>
			<WishList />
		</View>
	);
}

export default Recent;