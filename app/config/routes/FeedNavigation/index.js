import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import FeedStack from './FeedStack';

const FeedNavigation = ({ dispatch, nav }) => (
	<FeedStack
		navigation={addNavigationHelpers({
			dispatch,
			state: nav,
		})}
	/>
);

const mapStateToProps = state => ({
	nav: state.feedNav,
});

export default connect(mapStateToProps)(FeedNavigation);
