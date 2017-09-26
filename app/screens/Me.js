import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { View, ScrollView, Button } from 'react-native';

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
	goToScreen: (routeName, params) =>
		dispatch(NavigationActions.navigate({ routeName, params })),
});

export default connect(null, mapDispatchToProps)(Me);
