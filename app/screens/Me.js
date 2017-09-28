import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Button } from 'react-native';
import * as types from '../store/navs/actionTypes';

const Me = ({ goToScreen }) => (
	<ScrollView>
		<View>
			<Button
				onPress={() => goToScreen('UserDetail', { name: 'Lucy' })}
				title="Lucy"
			/>
		</View>
	</ScrollView>
);

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) => dispatch({ type: types.ME_NAV_NAVIGATE, routeName, params }),
});

export default connect(null, mapDispatchToProps)(Me);
