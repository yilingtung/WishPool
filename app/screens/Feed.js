import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import WishList from '../components/WishList';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	navigate = (page, data) => {
		this.props.navigation.navigate(page, data);
	}
	render() {
		return (
			<ScrollView>
				<View>
					<WishList navigate={this.navigate} />
				</View>
			</ScrollView>
		);
	}
}

export default Feed;
