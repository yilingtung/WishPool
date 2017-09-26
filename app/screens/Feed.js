import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import WishList from '../components/WishList';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ScrollView>
				<View>
					<WishList />
				</View>
			</ScrollView>
		);
	}
}

export default Feed;
