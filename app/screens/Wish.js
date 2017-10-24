import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Text,
} from 'react-native';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

class Wish extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ScrollView style={style.container}>
				<View>
					<Text>Wish</Text>
				</View>
			</ScrollView>
		);
	}
}

export default Wish;
