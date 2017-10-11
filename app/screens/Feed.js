import React, { Component } from 'react';
import {
	View,
	ScrollView,
} from 'react-native';
import WishList from '../components/WishList';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ScrollView style={style.container}>
				<View>
					<WishList />
				</View>
			</ScrollView>
		);
	}
}

export default Feed;
