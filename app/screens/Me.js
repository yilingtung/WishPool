import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Button } from 'react-native';
import { meNavNavigate } from '../store/navs/actions';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
};

const Me = ({ goToScreen }) => (
	<ScrollView style={style.container}>
		<View>
			<Button
				onPress={() => goToScreen('UserDetail', { name: 'Lucy' })}
				title="Lucy"
			/>
		</View>
	</ScrollView>
);

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) => dispatch(meNavNavigate(routeName, params)),
});

export default connect(null, mapDispatchToProps)(Me);
