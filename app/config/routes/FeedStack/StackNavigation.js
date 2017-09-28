import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Stack from './navigationConfiguration';

const StackNavigation = ({ dispatch, nav }) => (
	<Stack
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
);

const mapStateToProps = state => ({
	nav: state.feedNav,
});

const mapDispatchToProps = dispatch => ({
	dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigation);
