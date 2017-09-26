import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import MeStack from './MeStack';

const MeNavigation = ({ dispatch, nav }) => (
	<MeStack
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
);

const mapStateToProps = state => ({
	nav: state.meNav,
});

export default connect(mapStateToProps)(MeNavigation);
